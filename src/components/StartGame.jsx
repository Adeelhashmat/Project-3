import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="img_content">
        <img src="/images/dices1.png" alt="Dice 1" />
      </div>

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  height: calc(100vh-72px);
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  max-width: 1180px;

  .content h1 {
    font-size: 96px;
    font-weight: 700;
    line-height: 144px;
    letter-spacing: 0em;
    text-align: left;
  }
  .img_content img {
    margin-top: 100px;
    width: 510px;
  }
`;


