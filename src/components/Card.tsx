import React from "react";
import styled from "@emotion/styled";
import ListDetail from "./ListDetail";
import { H3, H4, P } from "./core/typography";

const Container = styled.section`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: calc(100vw - 16px);
  max-width: 350px;
  @media (min-width: 679px) {
    width: 350px;
  }
`;

const Background = styled.img`
  width: calc(100vw - 16px);
  max-width: 350px;
  border-radius: 10px 10px 0px 0px;
`;

const Img = styled.img`
  margin-top: -50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid white;
`;

const Information = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 200px;
  justify-content: center;
  align-items: center;
  padding: 8px 0px 16px 0px;
  > p {
    width: 100%;
    text-align: center;
  }
`;

interface CardData {
  name: string;
  age: number;
  place: string;
  followers: string;
  likes: string;
  photos: string;
  photo: string;
}

const Card = (props: CardData) => {
  return (
    <Container>
      <Background src="/images/bg-pattern-card.svg" />
      <Img src={props.photo} />
      <Information>
        <H3>{props.name} </H3>
        <H4 margin={"0px 0px 0px 8px"}>{`${props.age}`} </H4>
        <P>{props.place}</P>
      </Information>
      <ListDetail
        list={[
          { description: "Followers", title: props.followers },
          { description: "Likes", title: props.likes },
          { description: "Photos", title: props.photos }
        ]}
      />
    </Container>
  );
};

export default Card;
