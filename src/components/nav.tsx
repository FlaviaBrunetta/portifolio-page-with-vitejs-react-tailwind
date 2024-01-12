import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgNametag } from "react-icons/cg";
import { HiMenuAlt1 } from "react-icons/hi";

export function Nav() {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(!toggle);
  }

  return (
    <>
      {" "}
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a
            href="#"
            className="text-white font-mono text-3xl tracking-wider flex items-center "
          >
            Flávia | front-end developer
          </a>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <a
              href="#"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Skills
            </a>
            <a
              href="#"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Projetos
            </a>
            <a
              href="#"
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Depoimentos
            </a>
          </div>
          <div
            className="ssm:block lg:hidden cursor-pointer"
            onClick={openMenu}
          >
            {toggle ? (
              <AiOutlineClose size={30} className="text-white" />
            ) : (
              <HiMenuAlt1 size={30} className="text-white" />
            )}
          </div>
        </div>
      </div>
      {toggle && (
        <div>
          <div className="flex justify-between ml-10 lg:hidden">
            <ul>
              <li className="text-white text-xl mb-2 cursor-pointer">Skills</li>
              <li className="text-white text-xl mb-2 cursor-pointer">
                Projetos
              </li>
              <li className="text-white text-xl mb-2 cursor-pointer">
                Depoimentos
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
