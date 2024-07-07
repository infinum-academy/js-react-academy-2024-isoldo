'use client';

import { Container, Heading } from "@chakra-ui/react";
import styles from "./page.module.css";
import ShowDetailsContainer from "@/components/features/shows/ShowDetailsContainer/ShowDetailsContainer";
import ReviewItem from "@/components/features/review/ReviewItem/ReviewItem";

const APP_NAME = "TV Shows App"

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Heading>{APP_NAME}</Heading>
        <ShowDetailsContainer />
        <ReviewItem email='dummy@infinum.com' avatar='https://fakeimg.pl/60x60/353b38/eb9e9e?text=JD&font=noto' rating={8} comment='Almost as good as Breaking Bad'/>
      </Container>
    </main>
  );
}
