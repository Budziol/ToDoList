import { useState } from "react";
import {
  StyledItem,
  StyledInput,
  Button,
  StyledParagraph,
} from "./ToDoListSection/ToDoList.style";
import { StyledFontAwesome } from "../Components/ToDoListSection/StyledFontAwesomeIcon.style";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Item({ list, setList, animation }) {
  const [content, setContent] = useState();
  const [isEditable, setIsEditable] = useState(false);
  const [editingId, setEditingId] = useState();
  const [triggerLeaveAnimation, setTriggerLeaveAnimation] = useState(false);

  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setContent(item.content);
    setIsEditable(true);
  };

  const edit = (id) => {
    setList(
      list.map((item) => {
        return item.id === id
          ? { id: item.id, content: content, completed: item.completed }
          : item;
      })
    );
    setIsEditable(false);
  };

  const checked = (id) => {
    setList(
      list.map((item) => {
        return item.id === id
          ? { id: item.id, content: item.content, completed: !item.completed }
          : item;
      })
    );
  };

  return (
    <>
      {list.map((item) => {
        return (
          <StyledItem key={item.id}>
            {isEditable && editingId === item.id ? (
              <StyledInput
                autoFocus
                type="text"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></StyledInput>
            ) : (
              <StyledParagraph
                style={{
                  textDecorationLine: item.completed ? "line-through" : "",
                }}
                animationEntry={animation}
                onClick={() => handleEdit(item)}
              >
                {item.content}
              </StyledParagraph>
            )}
            {isEditable ? (
              <>
                <Button onClick={() => edit(item.id)}>
                  <StyledFontAwesome icon={faCheck} color="#06FF00" />
                </Button>
                <Button onClick={() => setIsEditable(!isEditable)}>
                  <StyledFontAwesome icon={faTimes} color="#FF4949" />
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => checked(item.id)}>
                  <StyledFontAwesome icon={faCheck} color="#06FF00" />
                </Button>
                <Button onClick={() => handleRemove(item.id)}>
                  <StyledFontAwesome icon={faTimes} color="#FF4949" />
                </Button>
              </>
            )}
          </StyledItem>
        );
      })}
    </>
  );
}

export default Item;
