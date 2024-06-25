import { CgMenuRight } from "react-icons/cg";
import { baselogo } from "../assets/icons";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Drawer } from "antd";
import { IoMdArrowBack } from "react-icons/io";

const Nav = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      if (colorChange) return;
      setColorchange(true);
    } else {
      if (!colorChange) return;
      setColorchange(false);
    }
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Fragment>
      <Drawer
        title="Basic Drawer"
        onClose={onClose}
        open={open}
        headerStyle={{ display: "none" }}
      >
        <div className="w-full flex">
          <div
            className="w-max border border-complement-color p-3 rounded-md"
            onClick={onClose}
          >
            <IoMdArrowBack className="fill-black100" size={"2em"} />
          </div>
        </div>
        <div className="flex flex-col mt-7">
          {navLinks.map((link) => (
            
            <a
              href={link.link}
              key={`mobile-${link.label}`}
              className="mt-10 text-vibrant-txt-color font-steradian text-xl hover:text-green100"
              onClick={onClose}
            >
              {link.label}
            </a>

            
          ))}

          <a
            href="#contact"
            className="mt-10 text-vibrant-txt-color font-steradian text-xl hover:text-complement-color"
            onClick={onClose}
          >
            Work with us
          </a>
        </div>
      </Drawer>
      <div
        className={`w-full hero-padding ${
          colorChange ? "bg-white" : "bg-transparent"
        } flex flex-row items-center justify-between py-5 fixed top-0 z-20`}
      >
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-row items-center">
            <img
              src={baselogo}
              className="w-[19px] sm:w-[25px]"
              alt="Pixel perfect web design agency"
            />
            <p className="font-steradian ml-3 font-bold text-lg">
              Pixel Perfect
            </p>
          </div>

          <div className="max-tab-one:hidden">
            <nav aria-label="main">
              <ul className="flex flex-row items-center gap-4">
                {navLinks.map((navItem) => {
                  return (
                    <li key={navItem.label}>
                      <a
                        className="font-steradian text-gray100 hover:text-purple100 "
                        href={navItem.link}
                      >
                        {navItem.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 max-tab-one:hidden">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="px-7 py-[0.65rem] rounded-lg font-steradian bg-transparent border border-purple100 text-sm text-purple100"
          >
            Contact
          </motion.button>
          <motion.a
            whileTap={{ scale: 0.85 }}
            className="px-7 py-[0.65rem] rounded-lg font-steradian bg-purple100 text-white text-sm"
            href="#contact"
          >
            Work with us
          </motion.a>
        </div>

        <div className="tab-one:hidden" onClick={showDrawer}>
          <CgMenuRight size={"1.8em"} />
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
