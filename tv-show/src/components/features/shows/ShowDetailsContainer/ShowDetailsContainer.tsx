import { IShow } from "@/typings/Show.type";
import ShowDetails from "../ShowDetails/ShowDetails";

function getShowData(): IShow {
  const showData: IShow = {
    title: "Better Call Saul",
    description: "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.",
    imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08fd3bfadb7d07164a560a41d89765396d7be6c2f8475c35837990c1357f4c5f.jpg",
  };

  return showData;
}

interface IShowDetailsContainerProps {
  averageRating: number | undefined;
}

export default function ShowDetailsContainer({averageRating}: IShowDetailsContainerProps) {
  const {title, description, imageUrl} = getShowData();

  return <ShowDetails title={title} description={description} imageUrl={imageUrl} averageRating={averageRating}/>
}
