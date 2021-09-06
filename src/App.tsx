import React from "react";
import styled from "@emotion/styled";
import Card from "./components/Card";
import "./styles.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

const Container = styled.main`
  background-color: hsl(185, 75%, 39%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img<{ top: string; left: string }>`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  @media (min-width: 426px) {
    top: ${({ top }) => top};
    left: ${({ left }) => left};
  }
`;

export default function App() {
  const props = {
    name: "Victor Crest",
    age: 26,
    place: "London",
    followers: "80K",
    likes: "803K",
    photos: "1.4k",
    photo: "/images/image-victor.jpg"
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Img src="/images/bg-pattern-top.svg" top="-50%" left="-50%" />
        <Card {...props} />
        <Img src="/images/bg-pattern-bottom.svg" top="50%" left="50%" />
      </Container>
    </ThemeProvider>
  );
}
