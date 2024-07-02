import { useEffect, useRef, useState } from "react";
import logo from "../assets/svg/logo.svg";
function Header() {
  const [links] = useState(["Futures", "Team", "SignIn"]);
  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100 && headerRef.current) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0px";
      } else if (headerRef.current) {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.paddingTop = "60px";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200"
    >
      <div className="container flex justify-between items-center gap-[30px] sm:gap-0  flex-col sm:flex-row">
        <a href="#">
          <img src={logo} />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link: string) => (
              <li key={link}>
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
      </div>
    </header>
  );
}

export default Header;
