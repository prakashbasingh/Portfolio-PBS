import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchNasaPics } from "./actions/nasaAction";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 5rem;
  box-shadow: 0 0 20px 15px black;
  margin: 10rem;
  width: auto;
  color: white;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-content: space-around;
`;
const Header = styled.h1`
  font-family: Times, Times New Roman, serif;
  font-weight: bold;
  text-shadow: 4px 4px 5px red, 4px 4px 8px #888;
  color: gold;
`;
const Title = styled.h4`
  text-shadow: 0px 5px 2px magenta;
  font-size: 30px;
  &:hover {
    color: gold;
    font-size: 35px;
    text-shadow: 0px 0px 5px white;
  }
`;
const Image = styled.img`
  height: 700px;
  box-shadow: 0 0 20px 15px red;
  border: 2px solid gold;
  border-radius: 2rem;
  color: red;
  &:hover {
    box-shadow: 0 0 25px 20px gold;
    border: 2px solid red;
  }
`;
const Paragraph = styled.p`
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size: 30px;
  text-shadow: 4px 5px 5px magenta;
  margin: 5rem 10rem;
  /* padding: 0 0 3rem 0; */
  color: gold;
  font-weight: bold;
  background-color: black;
  border: 2ps, solid, red;
  border-radius: 2rem;
  box-shadow: 0 0 25px 20px red;
`;

const NasaPicOfTheDay = (props) => {
  console.log(props, "WWWHHHAAATTT we have here????");

  useEffect(() => {
    props.fetchNasaPics();
  }, []);

  return (
    <Container>
      <Header>NASA Picture of The Day</Header>
      {props.isFetching && <h3> fetching data......</h3>}
      {/* here picture of the day should be displayed */}
      {/* {props.nasaPic && props.nasaPic.map((picData) => { */}
      {/* return ( */}
      <div>
        <Title> Title: {props.nasaPic.title}</Title>
        <Image src={props.nasaPic.url} alt="Picture of The Day" />
        <Paragraph>
          <p>Date: {props.nasaPic.date}</p>
          <p>Explanation: {props.nasaPic.explanation}</p>
        </Paragraph>
      </div>
      {/* ) */}
      {/* })} */}
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log({ state }, "what we have here in mSTP????????");
  return {
    isFetching: state.isFetching,
    nasaPic: state.nasaPic,
    error: state.error,
  };
};
export default connect(mapStateToProps, { fetchNasaPics })(NasaPicOfTheDay);

// note what does it mean prop.nasaPic.map is not a function error. need to ask this question//
