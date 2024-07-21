import ReviewList from "@/components/features/review/ReviewList/ReviewList";
import ReviewItem from "@/components/features/review/ReviewItem/ReviewItem";
import { IReview } from "@/typings/Review.type";
import { IUser } from "@/typings/User.type";
import { render } from "@testing-library/react";

jest.mock("@/components/features/review/ReviewItem/ReviewItem");

jest.mock("@/fetchers/fetcher", () => {
  return {
    authGet: jest.fn().mockReturnValue(null)
  }
})

describe("ReviewList", () => {
  it("should render ReviewItem component", () => {
    const currentUser: IUser = {
      id: "11",
      email: "user@userland.com",
      image_url: ""
    };
    const otherUser: IUser = {
      id: "12",
      email: "other@userland.com",
      image_url: ""
    }
    const reviews: IReview[] = [
      {
        id: "22",
        comment: "test",
        rating: 2,
        show_id: 4,
        user: currentUser
      },
      {
        id: "23",
        comment: "test",
        rating: 4,
        show_id: 4,
        user: otherUser
      }
    ]
    render(
      <ReviewList reviews={reviews} user={currentUser} />
    );

    expect(ReviewItem).toHaveBeenNthCalledWith(1, {review: reviews[0], user: currentUser}, {});
    expect(ReviewItem).toHaveBeenNthCalledWith(2, {review: reviews[1], user: currentUser}, {});
  })
})
