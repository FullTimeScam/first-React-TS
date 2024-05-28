import { FC } from "react";
import Box from "./components/Box";

const App: FC = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center gap-10">
      <Box name="바나나 박스" bgColor="bg-yellow-500" isRounded={false} />
      <Box name="사과 박스" bgColor="bg-red-500" isRounded={true} />
      <Box name="컨테이너 박스" bgColor="bg-gray-500" isRounded={false} />
      <Box name="비트 박스" bgColor="bg-yellow-300" />
      <Box name="이더 박스" bgColor="bg-blue-500" />
    </div>
  );
};

export default App;
