import { FC } from "react";
import Box from "./components/Box";
import BoxPractice2 from "./components/BOX_practice2";

const App: FC = () => {
  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center gap-10">
      <BoxPractice2
        name="바나나 박스"
        bgColor="bg-yellow-500"
        isRounded={false}
      />
      <BoxPractice2 name="사과 박스" bgColor="bg-red-500" isRounded={true} />
      <BoxPractice2
        name="컨테이너 박스"
        bgColor="bg-gray-500"
        isRounded={false}
      />
      <BoxPractice2 name="비트 박스" bgColor="bg-yellow-300" />
      <BoxPractice2 name="이더 박스" bgColor="bg-blue-500" />
    </div>
  );
};

export default App;
