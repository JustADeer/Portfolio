import Draggable from "react-draggable";
import React from "react";

interface ContactProps {
  onClose: () => void;
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Copied to clipboard:", text);
  });
};

function Contact({ onClose }: ContactProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);

  const x = window.innerWidth / 2 - 192 * 2;
  const y = window.innerHeight / 2 - 128 * 2;

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      handle=".drag-hande"
      defaultPosition={{ x: x, y: y }}
      defaultClassName="fixed inset-0"
    >
      <div
        ref={nodeRef}
        className="drag-hande w-192 h-128 bg-white flex flex-col items-start justify-center rounded-lg"
      >
        {/*Header */}
        <div className="absolute top-0 w-full bg-gray-700 rounded-t-lg flex items-center justify-between px-2 mb-8">
          <span className=" text-white text-2xl">contact</span>
          <button
            className="cursor-pointer flex items-center mb-1"
            onClick={onClose}
          >
            <span className="text-pink-200 text-2xl">[x]</span>
          </button>
        </div>

        {/*Devider */}
        <div className="mt-8 mb-8" />

        {/*Paragraph*/}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="align-middle">
            Hello this is my contact list, please don't spam the email:{" "}
            <span
              className="cursor-pointer font-semibold underline"
              onClick={() => copyToClipboard("shaquillesouzan3@gmail.com")}
            >
              shaquillesouzan3@gmail.com
            </span>
          </div>
          <img
            src="src\assets\9129_thinkass.png"
            className="w-48 align-middle flex mt-8"
          ></img>

          <button
            className="p-2 bg-orange-300 rounded-xl border-amber-800 border-2 cursor-pointer align-middle hover:scale-110 transition-transform duration-250 ease-in-out mt-8"
            onClick={() => window.open("mailto:shaquillesouzan3@gmail.com")}
          >
            Email Me!
          </button>
        </div>
      </div>
    </Draggable>
  );
}

export default Contact;
