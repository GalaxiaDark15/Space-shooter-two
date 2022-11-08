import useAllHighScores from "../../hooks/useAllHighScores";
import styled from "styled-components";
import bgImg from "../../assets/background.png";
import { Outlet, Link } from "react-router-dom";

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${bgImg});
  background-repeat: repeat;
  background-position: 0 0;
  background-size: auto 100%;
  /*adjust s value for speed*/
  animation: animatedBackground 500s linear infinite;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

const ScoreWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  text-align: center;
  width: 275px;
  height: 70px;
  margin-bottom: 50px;
  opacity: 0.75;
  transition: all ease-in-out 300ms;

  p {
    margin: 0;
  }

  p:nth-child(1) {
    margin-bottom: 15px;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const Header = styled.h1`
  color: #fff;
  font-size 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 25px;
`;

const DeleteButton = styled.button`
  color: #fff;
  background-color: red;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  outline: none;
  border-color: red;
  border-style: solid;

  &:hover {
    cursor: pointer;
  }
`;

const EditButton = styled.button`
  color: #fff;
  background-color: lightblue;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;
  outline: none;
  border-color: lightblue;
  border-style: solid;

  &:hover {
    cursor: pointer;
  }
`;

function goToUpdateScores(){
  console.log("http://localhost:3000/update-scores")
};

export default function HighScores() {
  // object destructuring
  const { allScores, deleteScore, isDeleting } = useAllHighScores();

  return (
    <PageWrapper>
      <Header>Space Shooter Scores</Header>
      {allScores.map((score, i) => (
        <ScoreWrapper key={i}>
          <p>{score.userName || score.username}</p>
          <p>{score.score}</p>
          <DeleteButton
            onClick={() => {
              console.log("hit delete");
              deleteScore(score._id);
            }}
          >
            {isDeleting === true ? "Is Deleting" : "Delete"}
          </DeleteButton>
          <>  </>
          <EditButton
            onClick={() => {
              console.log("go to");
              goToUpdateScores();
            }}
            >
            Edit
          </EditButton>
        </ScoreWrapper>
      ))}
    </PageWrapper>
  );
}
