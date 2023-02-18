import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: ${(prop) =>
    prop.isDragging ? "#74b9ff" : prop.theme.cardColor};
  box-shadow: ${(prop) =>
    prop.isDragging ? "0px 2px 3px rgba(0,0,0,0.1)" : "none"};
`;

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

function DragabbleCard({ toDo, index }: IDragabbleCardProps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
