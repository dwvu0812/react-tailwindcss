import React, { useState } from "react";
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from "react-icons/bi";
import NavItem from "./NavItem";

const defaultItemSize = "1.875rem";

const items = [
  { label: "Home", icon: <BiHomeAlt size={defaultItemSize} />, active: true },
  { label: "Movie", icon: <BiMoviePlay size={defaultItemSize} /> },
  { label: "About", icon: <BiInfoCircle size={defaultItemSize} /> },
];

const NavItemsContainer = () => (
  <>
    {items.map((item, index) => (
      <NavItem item={item} key={index} />
    ))}
  </>
);

const Index = () => {
  const [isNavItemOpen, setIsNavItemOpen] = useState(false);

  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="flex md:block mx-4 justify-between items-center">
        <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">
          Phimmoi.net
        </h4>
        <BiMenu
          className="cursor-pointer md:hidden"
          size={defaultItemSize}
          onClick={() => setIsNavItemOpen(!isNavItemOpen)}
        />
      </div>
      <ul className={`mx-4 my-2 ${isNavItemOpen ? "" : "hidden"} md:block`}>
        <NavItemsContainer />
      </ul>
    </nav>
  );
};

export default Index;
