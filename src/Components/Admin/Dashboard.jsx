import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  const tabPageVisites = [
    ["/argon/", "4,569", "340", "46,53%"],
    ["/argon/index.html", "3,985", "319", "46,53%"],
    ["/argon/charts.html", "3,513", "294", "36,49%"],
    ["/argon/tables.html", "2,050", "147", "	50,87%"],
    ["/argon/profile.html", "1,795", "190", "46,53%"],
  ];

  const tabSocialTraffic = [
    ["Facebook", "1,480", "60%"],
    ["Facebook", "5,480", "70%"],
    ["Google", "4,807", "80%"],
    ["Instagram", "3,678", "75%"],
    ["twitter", "2,645", "30%"],
  ];

  return (
    <section className="dashboardDivised bg-[#F8FAFC]   col-start-2 col-end-3">
      <Sidebar />
      <div className="h-screen overflow-y-scroll">
        <Header />
        <div className="grid grid-cols-[1fr_350px] gap-9 mx-16 -mt-28 pb-10 ">
          <div className="bg-[#334155] rounded-lg text-white h-96 text-2xl text-center py-10">
            <h2>Sales value</h2>
            <p className="text-gray-300 font-semibold text-7xl mt-15">
              Graphique
            </p>
          </div>
          <div className="bg-green-600 rounded-lg text-gray-800 text-2xl text-center py-10">
            <h2>Total orders</h2>
            <p className="text-gray-800 font-semibold text-6xl mt-15">
              Graphique
            </p>
          </div>

          <div className="container mx-auto ">
            <div className="bg-white shadow-lg shadow-gray-500 rounded-xl overflow-x-auto">
              <div className="flex justify-between items-center my-4 mx-6">
                <h2 className="text-xl ">Page Visits</h2>
                <a
                  href="#"
                  className="bg-blue-500 text-white font-bold px-2.5 py-0.5 rounded hover:underline"
                >
                  SEE ALL
                </a>
              </div>
              <table className="min-w-full  divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      PAGE NAME
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      VISITORS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      UNIQUE USERS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      BOUNCE RATE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tabPageVisites.map((element) => {
                    return (
                      <tr key={element} className="bg-white">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {element[0]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {element[1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {element[2]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {element[3]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="container mx-auto ">
            <div className="bg-white shadow-lg shadow-gray-500 rounded-xl overflow-x-auto">
              <div className="flex justify-between items-center my-4 mx-6">
                <h2 className="text-xl ">Social traffic</h2>
                <a
                  href="#"
                  className="bg-blue-500 text-white font-bold px-2.5 py-0.5 rounded hover:underline"
                >
                  SEE ALL
                </a>
              </div>
              <table className="min-w-full  divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Referral
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      VISITORS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {tabSocialTraffic.map((element) => {
                    return (
                      <tr key={element} className="bg-white">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {element[0]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {element[1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {element[2]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer isAdmin={true} />
      </div>
    </section>
  );
};

export default Dashboard;
