import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <nav className="flex justify-center items-center min-h-screen bg-gray-100">
      <ul className="flex flex-col md:flex-row gap-4">
        <li className="basis-1/2">
          <Link to="/which-principle">
            <button className="bg-black hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 h-32">
              Which Agile Principle Are You?
            </button>
          </Link>
        </li>
        <li className="basis-1/2">
          <Link to="/how-agile-is-your-team">
            <button className="bg-red-600 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 h-32 w-full">
              How Agile Is Your Team?
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
