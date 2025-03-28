/* eslint-disable react/prop-types */
const CardTables = ({ elementTableColorId }) => {
  const tableElement = [
    ["Argon Design System", "$2,500 USD", "pending", 60],
    ["Angular Now UI Kit PRO", "$1,800 USD", "completed", 100],
    ["Black Dashboard Sketch", "$3,150 USD", "delayed", 73],
    ["React Material Dashboard", "$4,400 USD", "on schedule", 90],
    ["Vue Material Dashboard", "$2,200 USD", "completed", 100],
  ];
  const listImg = [
    "bootstrap.jpg",
    "angular.jpg",
    "svelte.jpg",
    "react.jpg",
    "vue.jpg",
  ];
  const myColor = [
    "bg-amber-500",
    "bg-green-800",
    "bg-red-500",
    "bg-green-600",
    "bg-green-800",
  ];

  return (
    <section className="w-full">
      <h5
        className={`mx-9 py-3 text-xl font-medium ${
          elementTableColorId == 0 ? "text-neutral-600" : "text-white"
        } `}
      >
        Card Tables
      </h5>
      <table className="min-w-full  table-auto ">
        <thead
          className={` border-y ${
            elementTableColorId == 0
              ? "bg-gray-100  border-gray-200"
              : "bg-[#9D174D]  border-[#c41e61]"
          } `}
        >
          <tr>
            <th
              className={`px-6 py-3.5 text-left text-sm font-medium ${
                elementTableColorId == 0 ? "text-gray-700" : "text-gray-400"
              }  uppercase tracking-wider`}
            >
              Projet
            </th>
            <th
              className={`px-6 py-3.5 text-left text-sm font-medium ${
                elementTableColorId == 0 ? "text-gray-700" : "text-gray-400"
              }  uppercase tracking-wider`}
            >
              Budget
            </th>
            <th
              className={`px-6 py-3.5 text-left text-sm font-medium ${
                elementTableColorId == 0 ? "text-gray-700" : "text-gray-400"
              }  uppercase tracking-wider`}
            >
              Status
            </th>
            <th
              className={`px-6 py-3.5 text-left text-sm font-medium ${
                elementTableColorId == 0 ? "text-gray-700" : "text-gray-400"
              }  uppercase tracking-wider`}
            >
              Users
            </th>
            <th
              className={`px-6 py-3.5 text-left text-sm font-medium ${
                elementTableColorId == 0 ? "text-gray-700" : "text-gray-400"
              }  uppercase tracking-wider`}
            >
              Completion
            </th>
          </tr>
        </thead>

        <tbody>
          {tableElement.map((element, index) => {
            return (
              <tr
                key={element}
                className={`${
                  elementTableColorId == 0 ? "text-gray-700" : "text-white"
                } `}
              >
                <td className="pl-6 py-4 w-80 whitespace-nowrap">
                  <div className="flex items-center">
                    {/* Icône ou initiale du projet */}
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 p-0.5 mx-4 rounded-full bg-white  border border-gray-300"
                        src={`src/assets/img/${listImg[index]}`}
                        alt=""
                      />
                      <p className="text-sm font-bold">{element[0]}</p>
                    </div>
                  </div>
                </td>
                <td className="pl-6 py-4 whitespace-nowrap">
                  <div className="text-sm ">{element[1]}</div>
                </td>
                <td className="py-4 whitespace-nowrap ">
                  <span className="px-2 inline-flex items-center text-xs leading-5 rounded-full">
                    <div
                      className={`${myColor[index]} h-4 w-4 mx-2 rounded-full`}
                    ></div>
                    {element[2]}
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap text-sm text-gray-500">
                  {/* Avatar des utilisateurs */}
                  <div className=" flex items-center flex-row shrink w-32">
                    <img
                      className="w-12 h-12 rounded-full bg-white p-0.5 shadow shadow-black/50"
                      src="src\assets\img\team-1-800x8000.jpg"
                      alt=""
                    />
                    <img
                      className="w-12 h-12 rounded-full bg-white p-0.5 -ml-5 shadow shadow-black/50"
                      src="src\assets\img\team-2-800x800.jpg"
                      alt=""
                    />
                    <img
                      className="w-12 h-12 rounded-full bg-white p-0.5 -ml-5 shadow shadow-black/50"
                      src="src\assets\img\team-3-800x800.jpg"
                      alt=""
                    />
                    <img
                      className="w-12 h-12 rounded-full bg-white p-0.5 -ml-5 shadow shadow-black/50"
                      src="src\assets\img\team-4-470x470.png"
                      alt=""
                    />
                  </div>
                </td>
                <td className=" py-4 whitespace-nowrap text-right text-sm font-medium flex items-center justify-around  ">
                  <div className="flex items-center">
                    <p className="text-sm  font-light">{element[3]}%</p>
                    <div className={`w-20 bg-black/50  rounded-full h-2 mx-3`}>
                      {/* ${myColor[index]} opacity-95 */}
                      <div
                        className={`${myColor[index]} h-2 rounded-full`}
                        style={{ width: `${element[3]}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="bg-gray-500 h-6 w-1 "></div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default CardTables;
