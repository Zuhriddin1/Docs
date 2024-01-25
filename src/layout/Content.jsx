import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Content = () => {
  return (
    <div>
      <div className="m-[25px] p-[0,25px] border-b-[5px] text-black">
        {" "}
        <h1 className="text-black text-[2rem] font-bold cursor-pointer">
          How to use it
        </h1>
        <p>
          DummyJSON can be used with any type of front end project that needs
          products, carts, users, todos or any dummy data in JSON format.
        </p>
        <p className="">
          You can use examples below to check how DummyJSON works.
        </p>
        <p> Feel free to enjoy it in your awesome projects!</p>
      </div>
      <div className="text-black m-[25px] w-full ">
        <h2 className=" text-black text-[2rem] font-bold cursor-pointer">
          Info
        </h2>
        <span className="mt-[85px] text-[18px] font-medium">Test Route</span>
        <p>See if your internet is working 😉</p>
        <SyntaxHighlighter language="javascript" className="mt-6" style={dark}>
          {`          // Could be GET or POST/PUT/PATCH/DELETE
          fetch('//dummyjson.com/test')
          .then(res => res.json())
          .then(console.log);
          /* { status: 'ok', method: 'GET' } */
            `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Content;
