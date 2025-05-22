import Draggable from "react-draggable";
import React from "react";

interface FaqProps {
  onClose: () => void;
}

function Faq({ onClose }: FaqProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  const x = window.innerWidth / 2 - 192 * 2;
  const y = window.innerHeight / 2 - 128 * 2;

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      handle=".drag-hande"
      defaultPosition={{ x: x, y: y }}
      defaultClassName="fixed inset-0 z-1"
    >
      <div
        ref={nodeRef}
        className="drag-hande w-192 h-128 bg-white flex flex-col items-start justify-center rounded-lg"
      >
        {/*Header */}
        <div className="absolute top-0 w-full bg-gray-700 rounded-t-lg flex items-center justify-between px-2">
          <span className=" text-white text-2xl">faq</span>
          <button
            className="cursor-pointer flex items-center mb-1"
            onClick={onClose}
          >
            <span className="text-pink-200 text-2xl">[x]</span>
          </button>
        </div>

        {/*Devider */}
        <div className="mt-8 mb-8" />
      </div>
    </Draggable>
  );
}

export default Faq;
