'use client';

import { Button, Flex, Textarea } from "@chakra-ui/react";
import RatingInput from "../../rating/RatingInput/RatingInput";
import { INewReview } from "@/typings/Review.type";
import { IUser } from "@/typings/User.type";
import { Controller, useForm } from "react-hook-form";

interface IReviewFormProps {
  onSubmit: (newReview: INewReview) => void;
  user: IUser;
}

export default function ReviewForm({onSubmit}: IReviewFormProps) {
  const {register, handleSubmit, control, setValue, formState: {isSubmitting}, watch} = useForm<INewReview>();

  const onRate = (data: INewReview) => {
    onSubmit(data);
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
          <Flex justifyContent='space-between' alignItems="baseline" flexGrow={1} className="review-form-rating-row">
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
            <Button isDisabled={isDataIncomplete || isSubmitting} type="submit">Post</Button>
          </Flex>
      </form>
    </Flex>
  )
}
