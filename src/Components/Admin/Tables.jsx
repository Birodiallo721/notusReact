import CardTables from "./CardTables";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Tables = () => {
  return (
    <section className="dashboardDivised bg-[#F8FAFC]  col-start-2 col-end-3">
      <Sidebar />
      <div className="h-screen overflow-y-scroll">
        <Header />
        <div className="grid grid-rows-2 gap-9 mx-16 -mt-28 pb-10 ">
          <div className="bg-white rounded-lg shadow-black container mx-auto ">
            <CardTables elementTableColorId={0} />
          </div>
          <div className="bg-[#831843]  rounded-lg shadow-black container mx-auto">
            <CardTables elementTableColorId={1} />
          </div>
        </div>
        <Footer isAdmin={true} />
      </div>
    </section>
  );
};

export default Tables;
