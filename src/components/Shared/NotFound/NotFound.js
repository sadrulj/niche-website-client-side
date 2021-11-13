import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-1xl font-semibold text-gray-700 dark:text-gray-200">
        404
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Page not found. Check the address or{" "}
        <Link
          className="text-purple-600 hover:underline dark:text-purple-300"
          to="/home"
        >
          go back
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
