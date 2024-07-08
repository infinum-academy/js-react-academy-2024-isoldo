'use client';

import { Container, Heading } from "@chakra-ui/react";
import styles from "./page.module.css";
import ShowContainer from "@/components/features/shows/ShowContainer/ShowContainer";

const APP_NAME = "TV Shows App"

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Heading>{APP_NAME}</Heading>
        <ShowContainer />
      </Container>
    </main>
  );
}
