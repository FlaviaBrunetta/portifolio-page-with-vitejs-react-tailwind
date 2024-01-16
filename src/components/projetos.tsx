import { BsCart4 } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";

export function Projetos() {
  return (
    <>
      <div className="bg-orange m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-darkPurple mt-10">Projetos</h1>
        </div>

        <div>
          <div className="grid sm:grid-cols-2 gap-4 p-5 grid-cols-1">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="tracking-wide text-sm to-magenta font-semibold">
                    SAA SOFTWARE
                  </div>
                  <a href="#">Projeto AGROCHIP</a>
                  <p className="mt-2 text-magenta">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin maximus quis massa in interdum. Curabitur consectetur
                    nulla enim, ut eleifend nunc hendrerit in. Sed convallis
                    lectus eu placerat rutrum. Nulla eget congue augue.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <GiFarmTractor size={100} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <BsCart4 size={90} />
                </div>
                <div className="p-8">
                  <div className="tracking-wide text-sm to-magenta font-semibold">
                    SAA SOFTWARE
                  </div>
                  <a href="#">Projeto Granos - marketplace</a>
                  <p className="mt-2 text-magenta">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin maximus quis massa in interdum. Curabitur consectetur
                    nulla enim, ut eleifend nunc hendrerit in. Sed convallis
                    lectus eu placerat rutrum. Nulla eget congue augue.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-darkPurple" />
          <div className="grid sm:grid-cols-2 gap-4 p-5 grid-cols-1">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="tracking-wide text-sm to-magenta font-semibold">
                    SAA SOFTWARE
                  </div>
                  <a href="#">Projeto Granos - Dashboard e Administrativo</a>
                  <p className="mt-2 text-magenta">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin maximus quis massa in interdum. Curabitur consectetur
                    nulla enim, ut eleifend nunc hendrerit in. Sed convallis
                    lectus eu placerat rutrum. Nulla eget congue augue.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <FaChartBar size={70} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <MdDesignServices size={80} />
                </div>
                <div className="p-8">
                  <div className="tracking-wide text-sm to-magenta font-semibold">
                    TCC
                  </div>
                  <a href="#">
                    Projeto Conculsão de Curso - TADS IFMT Primavera do Leste
                  </a>
                  <p className="mt-2 text-magenta">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin maximus quis massa in interdum. Curabitur consectetur
                    nulla enim, ut eleifend nunc hendrerit in. Sed convallis
                    lectus eu placerat rutrum. Nulla eget congue augue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
