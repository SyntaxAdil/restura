import { useState } from "react";
import logo from "../assets/logo.png";
import { LINKS } from "../constants/index";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

export const Navbar = () => {
  const [isMenuBar, setIsMenuBar] = useState(false);
  function toggleMenuBar() {
    setIsMenuBar(!isMenuBar);
  }
  const handleScroll = (event, targetId) => {
    event.preventDefault();

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const offsetTop = targetEl.offsetTop - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 ">
      <div className="container flex justify-between items-center w-full lg:max-w-200 mx-auto backdrop-blur-lg rounded-lg lg:rounded-full p-4  lg:shadow-2xl ">
        <div className="flex items-center">
          <a href="#">
            <img src={logo} alt="logo " width={80} />
          </a>
        </div>
        <ul className=" gap-8 items-center hidden lg:flex">
          {LINKS.map((items, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${items.targetId}`}
                  className={`text-sm text-neutral-100 transition-colors ${
                    index !== 0 ? "border-l-2 border-neutral-700 pl-2" : ""
                  }  hover:text-neutral-400`}
                  onClick={(e) => {
                    handleScroll(e, items.targetId);
                  }}
                >
                  {items.text}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className="lg:hidden text-2xl cursor-pointer"
          onClick={toggleMenuBar}
        >
          {!isMenuBar ? <CiMenuFries /> : <IoIosClose />}
        </button>

        {isMenuBar && (
          <ul className="fixed top-13 backdrop-blur-lg left-0 bg-neutral-900 h-auto p-4 gap-4 items-start lg:hidden flex flex-col w-full">
            {LINKS.map((items, index) => {
              return (
                <li key={index}>
                  <a
                    href={`#${items.targetId}`}
                    className={`text-sm text-neutral-200 transition-colors  hover:text-neutral-50`}
                    onClick={(e) => {
                      handleScroll(e, items.targetId);
                    }}
                  >
                    {items.text}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};
