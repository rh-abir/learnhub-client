import React from "react";

const Container = ({ children }) => {
  return (
    <div className="xl:w-11/12 lg:ml-16 lg:mr-16 sm:mr-8 sm:ml-8">
      {children}
    </div>
  );
};

export default Container;
