import { FC } from "react";

type BoxProps = {
  name: string;
  bgColor: string;
  isRounded?: boolean; //?를 붙이면 안넣어도 되는 인자값이 됨
};

const Box: FC<BoxProps> = ({ name, bgColor, isRounded = false }) => {
  return (
    <div
      className={`${bgColor} ${isRounded && "rounded-full"}
      w-96
      h-96
      text-3xl
      font-bold
      flex justify-center items-center`}
    >
      {name}
    </div>
  );
};

export default Box;
