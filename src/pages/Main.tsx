import { Link } from "react-router-dom";


export const Main = () => {
    return <menu>
    <ul>
      <li>
        <Link to={"which-principle"}>Whitch Agile Principle are you?</Link>
      </li>
      <li>
      <Link to={"how-agile-is-your-team"}>How agile is your team?</Link>
      </li>
    </ul>
  </menu>
}