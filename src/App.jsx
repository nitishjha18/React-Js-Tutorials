// const App = () => {
// to use this first import usestate
//     const [num, setNum] = useState(0);

//     return (
//     <div>
//       <h3>Number is {num} </h3>
//       <button onClick={ () => setNum(num+10)}>Increment</button>
//       <button onClick={ () => setNum(num-10)}>Decrement</button>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h2 className='text-5xl bg-pink-700'>abc</h2>
//       <h2>xyz</h2>
//     </div>
//   )
// }

import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const submitHndler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername('');
  };

  return (
    <div>
      <form onSubmit={(e) =>{
        submitHndler(e)
      }}>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          className="px-4 py-3 rounded text-xl m-5"
          type="text"
          placeholder="Enter your name"
        />
        <button className="px-4 py-3 m-5 text-xl font-semibold bg-emerald-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
