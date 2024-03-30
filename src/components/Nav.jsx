import styled from "styled-components";
import StartGame from "./StartGame";

const Nav = () => {
  return (
    <Container>
      <div className="image">
        <img onClick={StartGame} src="/images/logo.png" alt="LOGO" />
      </div>
      <ul className="list">
        <li >HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  .list {
    display: flex;
    list-style: none;
    gap: 25px;
    font-weight: 450;
    margin-right: 15px;
  }
  .list li {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .image img {
    height: 72px;
    cursor: pointer;
  }
`;
