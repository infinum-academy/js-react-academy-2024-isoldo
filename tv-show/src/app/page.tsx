'use client';

import { Container, Heading } from "@chakra-ui/react";
import styles from "./page.module.css";
import ShowDetailsContainer from "@/components/features/shows/ShowDetailsContainer/ShowDetailsContainer";

const APP_NAME = "TV Shows App"

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Heading>{APP_NAME}</Heading>
        <ShowDetailsContainer />
      </Container>
    </main>
  );
}
