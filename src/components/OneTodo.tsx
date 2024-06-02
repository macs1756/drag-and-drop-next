import React from "react";

interface ItodoProps {
  description: string;
}

const Todo: React.FC<ItodoProps> = ({ description }) => {
  return <div>{description}</div>;
};

export default Todo;
