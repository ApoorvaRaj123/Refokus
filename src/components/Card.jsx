import { React } from "react";

function Card() {
  const data = [
    {
      
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div className="w-52 bg-zinc-100 rounded-lg overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h3 className="font-semibold">{elem.name}</h3>
            <p className="text-xs mt-3">{elem.description}</p>
            <button className={`px-4 py-1 text-xs rounded mt-3 text-white ${elem.inStock ? "bg-blue-800" : "bg-red-500"}`}>
              {elem.inStock ? "In stock" : "Out of stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
