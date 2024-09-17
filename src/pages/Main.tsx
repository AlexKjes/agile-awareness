import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <nav className="flex justify-center items-center min-h-screen bg-gray-100">
      <ul className="flex flex-col md:flex-row gap-4">
        <li>
          <Link
            to="/which-principle"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300"
          >
            Which Agile Principle Are You?
          </Link>
        </li>
        <li>
          <Link
            to="/how-agile-is-your-team"
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300"
          >
            How Agile Is Your Team?
          </Link>
        </li>
      </ul>
    </nav>
  );
};
