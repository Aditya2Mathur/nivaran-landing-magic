import * as React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <h1 className="text-6xl font-bold mb-4">Error</h1>
    <p className="text-xl mb-8">Something went wrong</p>
    <Link to="/" className="text-blue-500 underline">
      Go back to Home
    </Link>
  </div>
);

export default ErrorPage;