import { Container } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import PageHome from "./components/home";
import Nav from "./components/nav/nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Starter Kit</title>
        <meta
          name="description"
          content="Starter kit using nextjs, chakra ui, and tailwind css easy modif to your project"
        />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <Nav />
      <Container>
        <PageHome />
      </Container>
    </div>
  );
}
