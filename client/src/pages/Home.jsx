import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-10 px-3 max-w-6xl mx-auto bg-white bg-opacity-35 rounded-lg">
    <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
      Find your next perfect
      <br />
      place with ease
    </h1>
    <div className="text-gray-800 text-sm sm:text-lg font-semibold">
      Sombit Estate is the best place to find your next perfect place to live.
      <br />
      We have a wide range of properties for you to choose from.
    </div>
    <Link
     to={'/search'}
    className="inline-flex text-sm md:text-md text-white font-semibold bg-blue-800 py-3 px-5 rounded hover:bg-blue-700 transition duration-300"
    style={{ width: 'auto', maxWidth: 'fit-content' }}
    >
  Let’s get started...
</Link>

  </div>
  
)
}
