import React from "react";

const Appbar = ({ logo, user }) => {
  return (
    <div className="flex items-center justify-between py-5 px-10 border">
      <h1 className="text-3xl font-extrabold font-sans">{logo}</h1>
      <div className="flex items-center justify-between gap-3">
        <div className="text-xl">Hello</div>
        <div className="bg-sky-950 text-lg text-white rounded-full w-9 h-9 text-center flex items-center justify-center">
          {user}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
