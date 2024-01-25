import Content from "./Content";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className="container mx-auto grid grid-cols-[300px_1fr_300px]">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Main;
