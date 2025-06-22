import React from "react";
// import Card from "./Components/Card";
// import axios from "axios";
import Lorempicsum from "./Components/Lorempicsum";

// Use State
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

// const App = () => {
//   const [username, setUsername] = useState("");

//   const submitHndler = (e) => {
//     e.preventDefault();
//     console.log(username);
//     setUsername('');
//   };

//   return (

//     <div>
//       <form onSubmit={(e) =>{
//         submitHndler(e)
//       }}>
//         <input
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value)
//           }}
//           className="px-4 py-3 rounded text-xl m-5"
//           type="text"
//           placeholder="Enter your name"
//         />
//         <button className="px-4 py-3 m-5 text-xl font-semibold bg-emerald-500 text-white rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// // COMPONENTS
// // File ka naam humesha capital me agar component bana rahe hai toh

// const App = () => {
//   const user = [
//     {
//       name: "Aarav Mehta",
//       city: "Mumbai",
//       age: 28,
//       profession: "Software Engineer",
//       profilePhoto: "https://example.com/photos/aarav.jpg",
//     },
//     {
//       name: "Priya Sharma",
//       city: "Delhi",
//       age: 24,
//       profession: "Graphic Designer",
//       profilePhoto: "https://example.com/photos/priya.jpg",
//     },
//     {
//       name: "Rohit Verma",
//       city: "Bengaluru",
//       age: 31,
//       profession: "Data Analyst",
//       profilePhoto: "https://example.com/photos/rohit.jpg",
//     },
//     {
//       name: "Neha Gupta",
//       city: "Pune",
//       age: 26,
//       profession: "Digital Marketer",
//       profilePhoto: "https://example.com/photos/neha.jpg",
//     },
//     {
//       name: "Karan Singh",
//       city: "Hyderabad",
//       age: 29,
//       profession: "Product Manager",
//       profilePhoto: "https://example.com/photos/karan.jpg",
//     },
//     {
//       name: "Isha",
//       sirname: "Rathore",
//       city: "Jaipur",
//       age: 25,
//       profession: "UX Designer",
//       profilePhoto: "https://example.com/photos/isha.jpg",
//     },
//   ];

//   return (
//     <div>
//       <div className="p-10">
//         {user.map(function (elem, idx) {
//           return (
//             <Card
//               key={idx}
//               username={elem.name}
//               age={elem.age}
//               city={elem.city}
//               profession={elem.profession}
//               photo={elem.profilePhoto}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };



// Fetch API using "axios"
// https://picsum.photos/ -> Is being used as PI
// const App = () => {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await axios.get(
//       `https://picsum.photos/v2/list?page=2&limit=10`
//     );

//     setData(response.data);
//   };

//   return (
//     <div className="p-10">
//       <button
//         onClick={getData}
//         className="bg-teal-600 text-white font-semibold telt-2xl px-6 py-3 rounded active:scale-90 "
//       >
//         Get Data
//       </button>
//       <div className="p-5 mt-5 bg-gray-700 rounded">
//         {data.map(function (elem, idx) {
//           return (
//             <div
//               key={idx}
//               className="bg-gray-50 text- black flem item-center justify-between w-full px-7 py-6 rounded mb-3"
//             >
//               <img className="h-40" src={elem.download_url} alt="" />
//               <h1 className="text-black text-xl font-semibold">
//                 {elem.author}
//               </h1>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };




// Same API calling but now this time by using components 
const App = () => {

    return(
        <div>
          <Lorempicsum />
        </div>
    )
}

export default App;

