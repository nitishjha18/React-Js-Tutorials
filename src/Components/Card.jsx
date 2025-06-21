import React from "react";

const Card = (props) => {
  return (
    <div className="mr-8 bg-white text-black inline-block p-6 text-center rounded">
      <img className="ml-8 h-32 w-32 rounded-full mb-3" src="props.profilePhoto" alt="" />
      <h1 className="text-2xl font-semibold mb-4">
        {props.username} {props.sirname}
      </h1>
      <h2>
        {props.city}, {props.age}
      </h2>
      <h4 >{props.profession}</h4>
      <button className="mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium">
        Add Friend
      </button>
    </div>
  );
};

export default Card;
