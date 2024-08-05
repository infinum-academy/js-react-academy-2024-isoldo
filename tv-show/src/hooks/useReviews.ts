import { authGet } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IReview } from "@/typings/Review.type";
import useSWR, { SWRResponse } from "swr";

interface IReviews {
  reviews: IReview[];
  meta: any;
}

export function useReviews(id: string):SWRResponse<IReviews, any> {
  return useSWR(swrKeys.showReviews(Number(id)), authGet<IReviews>);
}
