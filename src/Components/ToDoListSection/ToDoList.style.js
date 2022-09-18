import styled, { keyframes } from "styled-components";

export const ToDoListContainer = styled.main`
  background-color: var(--list-container-bg-color);
  width: 25rem;
  min-height: 20.625rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: var(--neumorphism);
  border-radius: var(--container-border);

  @media (max-width: 420px) {
    width: 19.375rem;
  }
`;

export const HeaderWrapper = styled.header`
  border-radius: var(--container-content-border);
  background-color: var(--list-container-bg-color);
  box-shadow: var(--neumorphism);
  padding: var(--container-content-padding);
  position: relative;
  bottom: var(--header-position);
`;

export const StyledHeading = styled.h1`
  font-family: "NotoSans";
  font-weight: 100;
  font-size: var(--font-size-xl);
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  gap: var(--flex-gap);
  width: 90%;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: var(--flex-gap);
  width: 100%;
`;

export const StyledInput = styled.input`
  border-radius: var(--container-content-border);
  box-shadow: var(--neumorphism);
  width: 80%;
  font-family: "NotoSans";
  font-weight: 100;
  font-size: var(--font-size-medium);
  box-sizing: border-box;
  padding: 0 0.313rem;
  border: none;
`;

export const StyledParagraph = styled.p`
  border-radius: var(--container-content-border);
  box-shadow: var(--neumorphism);
  text-align: center;
  width: 80%;
  font-family: "NotoSans";
  font-weight: 100;
  font-size: var(--font-size-medium);
  word-break: break-all;
  animation: ${(props) => (props.animationEntry ? additems : "")};
  animation: ${(props) => (props.animationLeave ? removeitems : "")};
  animation-fill-mode: forwards;
  animation-duration: 1s;
`;

const additems = keyframes`
from{
  transform: translateX(-300px);
  opacity: 0;
}
to{
  transform: translateX(0);
  opacity: 1;
}
`;

const removeitems = keyframes`
to{
  transform: translateX(-300px);
  opacity: 0;
}
`;

export const Button = styled.button`
  width: var(--button-wid-hei);
  height: var(--button-wid-hei);
  width: 10%;
  border: none;
  border-radius: var(--container-content-border);
  box-shadow: var(--neumorphism);
  background-color: var(--list-container-bg-color);
`;
