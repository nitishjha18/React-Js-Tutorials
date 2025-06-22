import axios from "axios";
import React, {useState} from "react";


const Lorempicsum = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=2&limit=20`
    );

    setData(response.data);
  };

  return (
    <div className="p-10">
      <button
        onClick={getData}
        className="bg-teal-600 text-white font-semibold telt-2xl px-6 py-3 rounded active:scale-90 "
      >
        Get Data
      </button>
      <div className="p-5 mt-5 bg-gray-700 rounded">
        {data.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="bg-gray-50 text- black flem item-center justify-between w-full px-7 py-6 rounded mb-3"
            >
              <img className="h-40" src={elem.download_url} alt="" />
              <h1 className="text-black text-xl font-semibold">
                {elem.author}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lorempicsum;

