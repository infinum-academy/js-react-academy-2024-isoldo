import { render, screen } from "@testing-library/react"
import ShowCard from "./ShowCard"
import { IShow } from "@/typings/Show.type"

/**
 * 1. component contains an image element (with provided url)
 * 2. show title is rendered
 * 3. correct average rating is rendered
 */
describe('ShowCard', () => {

  const show: IShow = {
    id: 'test_id_1',
    title: 'test_title',
    description: 'test_description',
    image_url: 'test_image_url',
    average_rating: 3,
    no_of_reviews: 101
  }

  it('should contain an image element with the provided URL', () => {
    render(<ShowCard show={{...show, image_url: 'expected.image.url'}}/>);
    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'expected.image.url');
  });

  it('should render the title', () => {
    render(<ShowCard show={show} />);
    const title = screen.getByText(show.title);

    expect(title).toBeInTheDocument();
  });

  it('should render the correct average rating', () => {
    render(<ShowCard show={show} />);
    const averageRating = screen.getByText(show.average_rating);

    expect(averageRating).toBeInTheDocument();
  })
})
