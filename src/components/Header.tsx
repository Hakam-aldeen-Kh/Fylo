import { useState } from "react";
import logo from "../assets/svg/logo.svg";
function Header() {
  const [links] = useState(["Futures", "Team", "SignIn"]);
  return (
    <header>
      <a href="#">
        <img src={logo} />
      </a>
      <nav>
        <ul className="flex items-center gap-[50px]">
          {links.map((link: string) => (
            <li>
              <a
                className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"
                href={`/${link.toLowerCase()}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
