import { IReview } from "@/typings/Review.type";
import { render, screen } from "@testing-library/react";
import ReviewItem from "./ReviewItem";
import { IUser } from "@/typings/User.type";

describe('ReviewItem', () => {
  const id = "123";
  const show_id = 456;
  const email = 'test@jest.js';
  const rating = 3;
  const comment = 'test comment';
  const user: IUser = {
    id: "123456",
    email,
    image_url: ""
  };

  const review: IReview = { id, show_id, user, rating, comment };

  it('should render the correct user email', () => {
    render(<ReviewItem review={review} user={user}/>);

    expect(screen.getByText(email)).toBeInTheDocument();
  });

  it('should render the correct comment', () => {
    render(<ReviewItem review={review} user={user} />);

    expect(screen.getByText(comment)).toBeInTheDocument();
  });

  it('should render the delete button', () => {
    render(<ReviewItem review={review} user={user} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });
});
