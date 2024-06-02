import React from "react";
import { MdDragIndicator } from "react-icons/md";

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
  return (
    <div
      className={
        "cursor-pointer p-[10px] my-[10px] text-[14px] " + renderColor(type)
      }
    >
      <div className="flex gap-[10px]">
        <div>
          <MdDragIndicator />
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Todo;
