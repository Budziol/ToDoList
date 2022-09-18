import React, { useEffect, useState } from "react";
import {
  ToDoListContainer,
  HeaderWrapper,
  ListWrapper,
  Button,
  StyledHeading,
} from "./ToDoList.style";
import { StyledFontAwesome } from "./StyledFontAwesomeIcon.style";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Item from "../Item";
import items from "../items";

function ToDoList() {
  const [list, setList] = useState([]);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    setList(items);
  }, []);

  const handleClick = () => {
    const newItemId = list.length + 1;
    setList([...list, { id: newItemId, content: "nowe zadanie" }]);
    setTriggerAnimation(true);
  };

  return (
    <ToDoListContainer>
      <HeaderWrapper>
        <StyledHeading>ToDoList</StyledHeading>
      </HeaderWrapper>
      <ListWrapper>
        <Item list={list} setList={setList} animation={triggerAnimation}></Item>
        <Button onClick={handleClick}>
          <StyledFontAwesome icon={faPlus} color="#000"></StyledFontAwesome>
        </Button>
      </ListWrapper>
    </ToDoListContainer>
  );
}

export default ToDoList;
