
import styled from "styled-components";

const RoleDice = ({roleDice ,CurrentDice}) => {
  

  
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/Dice/dice_${CurrentDice}.png`} alt="Dice1" />
        <p>Click on Dice to roll</p>
      </div>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  align-items: center;
  flex-direction: column;
  
  p {
    font-size: 24px;
    margin-left: 15px;
  }
`;
