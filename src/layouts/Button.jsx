import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`bg-[#ff6b6b] text-white px-8 py-2 rounded-full hover:bg-[#ff5252] transition duration-300 ease-in-out shadow-md hover:shadow-lg`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
