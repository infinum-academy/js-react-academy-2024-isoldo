import { IReview } from "@/typings/Review.type";
import { render, screen } from "@testing-library/react";
import ReviewItem from "./ReviewItem";

describe('ReviewItem', () => {
  const email = 'test@jest.js'
  const rating = 3;
  const comment = 'test comment';
  const review: IReview = { email, rating, comment };

  it('should render the correct user email', () => {
    render(<ReviewItem review={review} onRemoveClick={(review) => null}/>);

    expect(screen.getByText(email)).toBeInTheDocument();
  });

  it('should render the correct comment', () => {
    render(<ReviewItem review={review} onRemoveClick={(review) => null} />);

    expect(screen.getByText(comment)).toBeInTheDocument();
  });

  it('should render the delete button', () => {
    render(<ReviewItem review={review} onRemoveClick={(review) => null} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('should call onRemoveClick with the current review', () => {
    const mockOnDelete = jest.fn();
    render(<ReviewItem review={review} onRemoveClick={mockOnDelete} />);

    const removeButton = screen.getByText('Remove');
    removeButton.click();

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(review);
  });
});
