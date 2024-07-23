import { IShow } from "@/typings/Show.type";
import { render } from "@testing-library/react";
import ShowCard from "@/components/shared/ShowCard/ShowCard";
import ShowsList from "@/components/shared/ShowsList/ShowsList";

jest.mock("@/components/shared/ShowCard/ShowCard");

describe("ShowsList", () => {
  const shows: IShow[] = [
    {
      id: "20",
      average_rating: 4,
      description: "test_desc",
      image_url: "",
      no_of_reviews: 1,
      title: "test_title"
    },
    {
      id: "21",
      average_rating: 3,
      description: "description",
      image_url: "",
      no_of_reviews: 2,
      title: "title2"
    }
  ];

  it('should render ShowCard with correct props', () => {
    render(
      <ShowsList shows={shows} />
    );
    expect(ShowCard).toHaveBeenCalledTimes(2);
    expect(ShowCard).toHaveBeenNthCalledWith(1, { show: shows[0] }, expect.anything());
    expect(ShowCard).toHaveBeenNthCalledWith(2, { show: shows[1] }, expect.anything());
  })
})
