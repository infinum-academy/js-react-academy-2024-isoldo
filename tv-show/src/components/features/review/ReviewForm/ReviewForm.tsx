'use client';

import { Button, Flex, Textarea } from "@chakra-ui/react";
import RatingInput from "../../rating/RatingInput/RatingInput";
import { INewReview, IReview } from "@/typings/Review.type";
import { Controller, useForm } from "react-hook-form";
import { authPost } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWRMutation from "swr/mutation";
import { useReviews } from "@/hooks/useReviews";

interface IReviewFormProps {
  showId: string;
}

export default function ReviewForm({showId}: IReviewFormProps) {
  const {register, handleSubmit, control, setValue, formState: {isSubmitting}, watch} = useForm<INewReview>();
  const remoteReviews = useReviews(showId);
  const { trigger } = useSWRMutation(swrKeys.reviews(), authPost<IReview>, {
    onSuccess: ((data) => {
      remoteReviews.mutate();
    })
  });

  const onRate = async (data: INewReview) => {
    await trigger({...data, show_id: showId});
    setValue("rating", 0);
    setValue("comment", "");
  };

  const rating = watch("rating");
  const comment = watch("comment");
  const isDataIncomplete = !rating || !comment;

  return(
    <Flex direction="column" marginBottom={4} gap={3} flexGrow={1} id="review-form">
      <form onSubmit={handleSubmit(onRate)}>
          <Textarea
            borderRadius="26px"
            bg="white"
            _placeholder={{color: "lightPurple", opacity: 1}}
            placeholder='Enter review'
            color="darkPurple"
            {...register("comment")}
          />
          <Flex marginTop={3} justifyContent='space-between' alignItems="baseline" flexGrow={1} className="review-form-rating-row">
          <Controller
              control={control}
              name="rating"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <RatingInput
                  label="Rating"
                  onChange={onChange}
                  value={value}
                />
              )} />
            <Button isLoading={isSubmitting} isDisabled={isDataIncomplete} type="submit">Post</Button>
          </Flex>
      </form>
    </Flex>
  )
}
