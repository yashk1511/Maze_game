import Router from "next/router";
import React from "react";
import { Button } from "src/components/Button";

const Error404 = () => {
  return (
    <div className="flex-col h-screen c bg-blue-50">
      <h2>Error 404</h2>
      <Button
        title="Go Back"
        className="mt-6 rounded-md w-52"
        onClick={Router.back}
      />
    </div>
  );
};

export default Error404;
