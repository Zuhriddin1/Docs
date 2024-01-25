import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="shadow-[rgba(0,0,0,.25)] text-black p-[18px] cursor-pointer">
        <a class="text-[24px] pl-[30px] text-black" href="/">
          dummy
          <b className="text-black">JSON</b>
        </a>
        <a href="#" className="pl-[1000px] hover:font-bold hover:underline">
          Home
        </a>
        <a href="#" className="pl-[25px] hover:font-bold hover:underline">
          Docs
        </a>
        <a href="#" className="pl-[25px] hover:font-bold hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;
