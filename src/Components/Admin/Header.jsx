import {} from "react";
import BoxHeader from "./BoxHeader";

const Header = () => {
  const titre = [
    ["Traffic", "Since last month"],
    ["New users", "Since last week"],
    ["Sales", "Since yesterday"],
    ["Performance", "Since last month"],
  ];
  const montant = [
    ["350,897", "3.48%"],
    ["2,356", "3.48% "],
    ["924", "1.10% "],
    ["49,65%", "12%"],
  ];
  const couleur = [
    ["bg-[#EF4444]", "text-[#10B981]"],
    ["bg-[#F97316]", "text-[#EF4444]"],
    ["bg-[#EC4899]", "text-[#F97316]"],
    ["bg-[#0EA5E9]", "text-[#10B981]"],
  ];

  const tabElemetClass = [
    "far fa-chart-bar",
    "fas fa-chart-pie",
    "fas fa-users",
    "fas fa-percent",
  ];

  return (
    <div className="bg-[#DB2777] pb-36 px-16 w-full  ">
      <section className="flex justify-between items-center pt-5">
        <h5 className="uppercase text-white font-semibold">Dashboard</h5>
        <div className="flex ">
          <div className="flex justify-center h-14 ">
            <div className="bg-white w-10 my-1 -mr-12 flex items-center justify-center z-10">
              <i className="text-gray-300 fas fa-search fa-xl "></i>
            </div>
            <input
              className=" w-64 focus:border-4 focus:border-blue-600 outline-none bg-white rounded pl-12"
              placeholder="Search here..."
              type="search"
              max={5}
            />
          </div>
          <img
            className="w-14 rounded-4xl mx-4 "
            src="src\assets\img\team-1-800x800.jpg"
            alt="profile"
          />
        </div>
      </section>
      <section className="mt-14 grid grid-cols-4 gap-8">
        <BoxHeader
          titres={titre[0]}
          montants={montant[0]}
          couleurs={couleur[0]}
          tabElemetClass={tabElemetClass[0]}
        />
        <BoxHeader
          titres={titre[1]}
          montants={montant[1]}
          couleurs={couleur[1]}
          tabElemetClass={tabElemetClass[1]}
        />
        <BoxHeader
          titres={titre[2]}
          montants={montant[2]}
          couleurs={couleur[2]}
          tabElemetClass={tabElemetClass[2]}
        />
        <BoxHeader
          titres={titre[3]}
          montants={montant[3]}
          couleurs={couleur[3]}
          tabElemetClass={tabElemetClass[3]}
        />
      </section>
    </div>
  );
};

export default Header;
