import React from "react";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="py-7 px-10 bg-emerald-600 text-white flex items-center justify-between ">
      <h2 className="text-2xl">Coding</h2>
      <div className="flex gap-6 text-lg underline">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  );
};
export default App;
// We didnt use anchor tag because link dosn't reloads the page again but anchor tag does