import React from "react";
import { MdDragIndicator } from "react-icons/md";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";

interface ItodoProps {
  description: string;
  type: "execute" | "inProccess" | "success";
}

const renderColor = (type: string) => {
  if (type === "execute") {
    return "bg-[#583838]";
  }

  if (type === "inProccess") {
    return "bg-[green]";
  }

  if (type === "success") {
    return "bg-[#617e30]";
  }
};

const Todo: React.FC<ItodoProps> = ({ description, type }) => {

  const eventLogger = (e: DraggableEvent, data: DraggableData) => {

    const targetElement = e.target as HTMLElement;

    console.log("Event: ", e);
    console.log("Data: ", data);

    if (targetElement.style) {
      targetElement.style.zIndex = "9999";
    }
    
  };

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={{ x: 0, y: 0 }}
      grid={[25, 25]}
      scale={1}
      onStart={eventLogger}
      onDrag={eventLogger}
      onStop={eventLogger}
    >
      <div
        className={
          "relative cursor-pointer p-[10px] my-[10px] text-[14px] " +
          renderColor(type)
        }
      >
        <div className="flex gap-[10px] items-center">
          <div className="cursor-move handle">
            <MdDragIndicator />
          </div>
          <div>{description}</div>
        </div>
      </div>
    </Draggable>
  );
};

export default Todo;
