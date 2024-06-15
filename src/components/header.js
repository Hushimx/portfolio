import React from "react";

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  let [smMenu, setSmMenu] = React.useState(true);

  return (
    <nav className="shadow-lg">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white md:text-3xl">
            <a href="#" className="hoverable">
              Hushim
            </a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              onClick={() => setSmMenu((prev) => !prev)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {smMenu ? (
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                ) : (
                  <path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`bg-slate-800 text-white w-48 absolute z-50 right-0 p-2 ${
            smMenu ? "hidden" : ""
          }`}
        >
          <ul className="text-2xl">
            <li
              onClick={() => handleScroll("about")}
              className="cursor-pointer"
            >
              About me
            </li>
            <hr />
            <li
              onClick={() => handleScroll("skills")}
              className="cursor-pointer"
            >
              My Skills
            </li>
            <hr />
            <li
              onClick={() => handleScroll("projects")}
              className="cursor-pointer"
            >
              Projects
            </li>
            <hr />
            <li
              onClick={() => handleScroll("contact-section")}
              className="cursor-pointer"
            >
              Contact with me
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row hidden md:block -mx-2">
          <a
            className="text-white rounded cursor-pointer hover:bg-gray-900 hover:text-gray-100   py-2 px-2 md:mx-2"
            onClick={() => handleScroll("about")}
          >
            About me
          </a>
          <a
            onClick={() => handleScroll("skills")}
            className="text-white rounded cursor-pointer hover:bg-gray-900 hover:text-gray-100   py-2 px-2 md:mx-2"
          >
            My Skills
          </a>
          <a
            onClick={() => handleScroll("projects")}
            className="text-white rounded cursor-pointer hover:bg-gray-900 hover:text-gray-100   py-2 px-2 md:mx-2"
          >
            Projects
          </a>
          <a
            onClick={() => handleScroll("contact-section")}
            className="text-white rounded cursor-pointer hover:bg-gray-900 hover:text-gray-100   py-2 px-2 md:mx-2"
          >
            Contact with me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
