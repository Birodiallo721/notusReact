import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Maps = () => {
  return (
    <section className="dashboardDivised bg-[#F8FAFC] col-start-2 col-end-3">
      <Sidebar />
      <div className="h-screen overflow-y-scroll">
        <Header />
        <div className=" mx-16 -mt-28 pb-10 ">
          <div className="bg-gray-100 rounded-lg text-white text-2xl text-center container mx-auto h-screen">
            <p className="text-gray-300 font-semibold text-9xl pt-10">Maps</p>
          </div>
        </div>
        <Footer isAdmin={true} />
      </div>
    </section>
  );
};

export default Maps;
