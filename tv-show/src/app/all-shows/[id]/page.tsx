'use client';

import ShowContainer from "@/components/features/shows/ShowContainer/ShowContainer";
import ShowCard from "@/components/shared/ShowCard/ShowCard";
import { IShow } from "@/typings/Show.type";
import { Container } from "@chakra-ui/react";
import { useParams } from "next/navigation";

const mockShows:IShow[] = [
  {
    id: 1,
    title: `Better Call Saul`,
    description:`The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.`,
    imageUrl: `https://m.media-amazon.com/images/S/pv-target-images/08fd3bfadb7d07164a560a41d89765396d7be6c2f8475c35837990c1357f4c5f.jpg`,
    numberOfReviews: 10,
    averageRating: 5.3
  },
  {
    id: 2,
    title: `The Boys`,
    description:`A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.`,
    imageUrl: `https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_.jpg`,
    numberOfReviews: 10,
    averageRating: 5.3
  },
  {
    id: 3,
    title: `The Sopranos`,
    description:`New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.`,
    imageUrl: `https://static.wikia.nocookie.net/listofdeaths/images/c/cc/The_Sopranos.jpg`,
    numberOfReviews: 10,
    averageRating: 5.3
  },
  {
    id: 4,
    title: `Crashing`,
    description:`A comedy series following the lives of six 20- and 30-somethings living together as property guardians of a large, disused hospital.`,
    imageUrl: `https://www.tvguide.com/a/img/catalog/provider/1/1/1-9508108309.jpg`,
    numberOfReviews: 10,
    averageRating: 5.3
  },
  {
    id: 5,
    title: `30 Rock`,
    description:`Liz Lemon, head writer of the sketch-comedy show "TGS with Tracy Jordan", must deal with an arrogant new boss and a crazy new star while trying to run a successful television show without losing her mind.`,
    imageUrl: `https://m.media-amazon.com/images/M/MV5BMTQ4NDQ4OTUzOV5BMl5BanBnXkFtZTcwMjMzMTUyNw@@._V1_.jpg`,
    numberOfReviews: 10,
    averageRating: 5.3
  },
  {
    id: 6,
    title: `The Bear`,
    description:`A young chef from the fine dining world returns to Chicago to run his family's sandwich shop.`,
    imageUrl: `https://rts.org.uk/sites/default/files/styles/9_column_landscape/public/credit_hulu.jpeg`,
    numberOfReviews: 10,
    averageRating: 5.3
  },
  {
    id: 7,
    title: `Justified`,
    description:`Enforcing his own brand of justice, U.S. Marshal Raylan Givens, a strong-willed, quiet law-man haunted by his past, returns to his native town to see that justice is served to those in need.`,
    imageUrl: `https://m.media-amazon.com/images/S/pv-target-images/2db0c28d352d64b8c35d95d5f23f954ed3fe4fc885c702bf352e750cc8bb06af.jpg`,
    numberOfReviews: 10,
    averageRating: 5.3
  },
  {
    id: 8,
    title: `Californication`,
    description:`A writer tries to juggle his career, his relationship with his daughter and his ex-girlfriend, as well as his appetite for beautiful women.`,
    imageUrl: `https://m.media-amazon.com/images/M/MV5BMjAyMDM2ODExNF5BMl5BanBnXkFtZTgwNTI2MjkzMTE@._V1_.jpg`,
    numberOfReviews: 10,
    averageRating: 5.3
  }
];

export default function ShowDetailsPage() {
  const { id } = useParams();

  const show = mockShows.find(show => show.id === Number(id));

  if(!show)
    return <Container>404</Container>;

  return <ShowContainer showData={show} />
}
