import React from "react";
import styled from "@emotion/styled";
import { H3, P } from "./core/typography";

interface Element {
  title: string;
  description: string;
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 16px 16px 16px 16px;
  align-items: center;
  border-top-style: solid;
  border-top-width: thin;
  border-color: #6a6f811f;

  > section {
    justify-items: center;
    text-align: center;
  }
  p {
    font-size: 14px;
  }
`;

const ListDetail = (props: { list: Element[] }) => {
  return (
    <Container>
      {props.list.map((elem, index) => (
        <section key={`list-detail-${index}`}>
          <H3 margin={"0px"}>{elem.title}</H3>
          <P margin={"0px"}>{elem.description}</P>
        </section>
      ))}
    </Container>
  );
};

export default ListDetail;
