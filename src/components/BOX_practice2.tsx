import { FC } from "react";

interface BoxProps {
  name: string;
  bgColor: string;
  isRounded?: boolean;
}

const BoxPractice2: FC<BoxProps> = ({ name, bgColor, isRounded }) => {
  return (
    <div
      className={`${bgColor} ${isRounded && "rounded-full"} w-96
    h-96
    text-3xl
    font-bold
    flex justify-center items-center`}
    >
      {name}
    </div>
  );
};

export default BoxPractice2;
