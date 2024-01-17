import { faker } from "@faker-js/faker";

export function Depoimentos() {
  return (
    <div className="max-w-full bg-orange m-20">
      <div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-4 p-5 grid-cols-1">
          <div className="max-w-md mx-auto md:max-w-xl rounded-xl overflow-auto p-8 hover:animate-pulse">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6">
              <img
                src={faker.image.avatar()}
                alt=""
                className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div className="text-darkPurple font-medium text-sm sm:text-base truncate ">
                  Nome Sobrenome
                </div>
                <div className="text-magenta font-medium text-sm sm:text-base leading-tight truncate">
                  Cargo
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto md:max-w-xl rounded-xl overflow-auto p-8 hover:animate-pulse">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6">
              <img
                src={faker.image.avatar()}
                alt=""
                className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div className="text-darkPurple font-medium text-sm sm:text-base truncate ">
                  Nome Sobrenome
                </div>
                <div className="text-magenta font-medium text-sm sm:text-base leading-tight truncate">
                  Cargo
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto md:max-w-xl rounded-xl overflow-auto p-8 hover:animate-pulse">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6">
              <img
                src={faker.image.avatar()}
                alt=""
                className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div className="text-darkPurple font-medium text-sm sm:text-base truncate ">
                  Nome Sobrenome
                </div>
                <div className="text-magenta font-medium text-sm sm:text-base leading-tight truncate">
                  Cargo
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto md:max-w-xl rounded-xl overflow-auto p-8 hover:animate-pulse">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6">
              <img
                src={faker.image.avatar()}
                alt=""
                className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div className="text-darkPurple font-medium text-sm sm:text-base truncate ">
                  Nome Sobrenome
                </div>
                <div className="text-magenta font-medium text-sm sm:text-base leading-tight truncate">
                  Cargo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
