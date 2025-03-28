import Header from "./Header";
import FooterAdmin from "../Admin/Footer";
const BoxBgLoginRester = () => {
  return (
    <div
      className="w-full h-full bg-cover min-h-full"
      style={{
        backgroundColor: "#1E293B",
        backgroundImage: "url('src/assets/img/register_bg_2.png')",
      }}
    >
      <Header isHome={false} />
      <div className=" h-screen bg-no-repeat">
        <p className="bg-amber-300 w-10 "></p>
      </div>
      <div className=" mt-9 ">
        <FooterAdmin isAdmin={false} />
      </div>
    </div>
  );
};

export default BoxBgLoginRester;
