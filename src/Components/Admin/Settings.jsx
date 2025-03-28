import { useRef, useState } from "react";
import { motion } from "motion/react";
import Footer from "./Footer";
import Header from "./Header";
import InputLabel from "./InputLabel";
import Sidebar from "./Sidebar";
const Settings = () => {
  const [datas, Setdatas] = useState({});
  let refUersFrom = useRef();
  const onSubmitForm = (e) => {
    e.preventDefault();
    const dataFrom = new FormData(e.target);

    const infos = {
      Username: dataFrom.get("Username"),
      Email: dataFrom.get("Email address"),
      First: dataFrom.get("First Name"),
      Last: dataFrom.get("Last Name"),
      Address: dataFrom.get("Address"),
      City: dataFrom.get("City"),
      Country: dataFrom.get("Country"),
      Postal: dataFrom.get("Postal Code"),
      AboutMe: dataFrom.get("About Me"),
    };

    if (infos.Username.length == 0) {
      refUersFrom.current[1].classList.add("outline-red-700", "outline-4");
    } else if (infos.Email.length == 0) {
      refUersFrom.current[2].classList.add("outline-red-700", "outline-4");
    } else if (infos.First.length == 0) {
      refUersFrom.current[3].classList.add("outline-red-700", "outline-4");
    } else if (infos.Last.length == 0) {
      refUersFrom.current[4].classList.add("outline-red-700", "outline-4");
    } else {
      Setdatas(infos);
      refUersFrom.current[1].classList.remove("outline-red-700", "outline-4");
      refUersFrom.current[2].classList.remove("outline-red-700", "outline-4");
      refUersFrom.current[3].classList.remove("outline-red-700", "outline-4");
      refUersFrom.current[4].classList.remove("outline-red-700", "outline-4");
    }
  };
  return (
    <section className="dashboardDivised bg-[#F8FAFC] col-start-2 col-end-3">
      <Sidebar />
      <div className="h-screen overflow-y-scroll">
        <Header />
        <div className="grid grid-cols-[1fr_350px] gap-9 mx-16 -mt-28  ">
          <div className="bg-[#F1F5F9] shadow inset-shadow-white rounded-lg container mx-auto mb-auto ">
            <form onSubmit={onSubmitForm} ref={refUersFrom}>
              <div className="flex justify-between items-center px-10 py-7 bg-white rounded-tr-lg rounded-tl-lg">
                <h5 className="font-bold text-2xl text-gray-700">My account</h5>
                <button
                  className="bg-pink-500 text-white uppercase px-4 py-1.5 rounded font-bold cursor-pointer hover:bg-pink-400"
                  type="submit"
                >
                  Settings
                </button>
              </div>
              <div className="mx-10 pt-3">
                <h5 className="uppercase text-neutral-400 font-bold">
                  User Information
                </h5>
                <div className="mt-3 mx-6 grid grid-cols-2 gap-8 ">
                  <InputLabel labels="Username" defaultValue="biro.diallo" />
                  <InputLabel
                    labels="Email address"
                    defaultValue="birodiallo721@gmail.com"
                  />
                  <InputLabel labels="First Name" defaultValue="Biro" />
                  <InputLabel labels="Last Name" defaultValue="Diallo" />
                </div>
                <hr className="mt-10 text-gray-400" />
              </div>
              <div className="mx-10 pt-3">
                <h5 className="uppercase text-neutral-400 font-bold">
                  Contact Information
                </h5>
                <div className="mt-3 mx-6 grid grid-cols-3 gap-8 ">
                  <span className="col-start-1 col-end-4">
                    <InputLabel
                      labels="Address"
                      defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    />
                  </span>
                  <InputLabel labels="City" defaultValue="New York" />
                  <InputLabel labels="Country" defaultValue="United States" />
                  <InputLabel labels="Postal Code" defaultValue="Postal Code" />
                </div>
                <hr className="mt-10 text-gray-400" />
              </div>
              <div className="mx-10 pt-3 pb-9 ">
                <h5 className="uppercase text-neutral-400 font-bold">
                  About Me
                </h5>
                <div className="mt-3 mx-6">
                  <label
                    className="flex flex-col uppercase font-semibold text-neutral-700"
                    htmlFor="About Me"
                  >
                    About Me
                    <textarea
                      name="About Me"
                      id="AboutMe"
                      rows="5"
                      className="bg-white focus:outline-blue-700 focus:outline-4 font-normal px-3 mt-2 py-3 shadow rounded-md"
                      defaultValue={
                        "\t \t \t \t \t \t \t \t \t \t  A beautiful UI Kit and Admin for JavaScript & Tailwind CSS. It is Free \n      and Open Source."
                      }
                    ></textarea>
                  </label>
                </div>
              </div>
            </form>
            <motion.div
              initial={{ y: "-500%", opacity: 0.75 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ ease: "easeOut", duration: 10 }}
              className="bg-white mx-15 shadow-2xl rounded-2xl"
            >
              {datas.Username && (
                <div className="mx-5 mb-10 font-semibold text-gray-700 py-5 ">
                  <p>
                    <span className="font-bold text-xl">Username : </span>
                    {datas.Username}
                    <span className="font-bold text-xl"> / Email : </span>
                    {datas.Email}
                  </p>

                  <p>
                    <span className="font-bold text-xl">First : </span>
                    {datas.First}
                    <span className="font-bold text-xl"> / Last : </span>
                    {datas.Last}
                  </p>

                  <p>
                    <span className="font-bold text-xl">Address : </span>
                    {datas.Address}
                  </p>
                  <p>
                    <span className="font-bold text-xl">City : </span>
                    {datas.City}
                  </p>
                  <p>
                    <span className="font-bold text-xl">Country : </span>
                    {datas.Country}
                  </p>
                  <p>
                    <span className="font-bold text-xl">Postal : </span>
                    {datas.Postal}
                  </p>
                  <p>
                    <span className="font-bold text-xl">About Me : </span>
                    {datas.AboutMe}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
          {/* gauche */}
          <div className=" shadow inset-shadow-white  container mx-auto flex flex-col items-center relative mb-10 ">
            <img
              className="rounded-full h-40 inset-shadow-white absolute top-2"
              src="src\assets\img\team-2-800x800.jpg"
              alt="image rounded"
            />
            <div className="bg-white rounded-lg h-full w-full mt-20 pt-28 px-5">
              <div className="flex justify-between px-4">
                <span className=" text-center">
                  <h6 className="font-bold text-2xl text-[#475569] ">22</h6>
                  <p className="text-[#8191a7]">Friends</p>
                </span>
                <span className=" text-center">
                  <h6 className="font-bold text-2xl text-[#475569] ">10</h6>
                  <p className="text-[#8191a7]">Photos</p>
                </span>
                <span className=" text-center">
                  <h6 className="font-bold text-2xl text-[#475569] ">89</h6>
                  <p className="text-[#8191a7]">Comments</p>
                </span>
              </div>
              <div className="flex flex-col items-center mt-20  ">
                <h6 className="text-xl font-semibold text-[#334155] mb-3">
                  Jenna Stones
                </h6>
                <span className="flex items-center text-gray-500 font-medium uppercase">
                  <i className="text-gray-500 fas fa-map-marker-alt fa-lg mr-3"></i>
                  <p className="">Los Angeles, California</p>
                </span>
                <span className="flex items-start  text-gray-700 mt-10 ">
                  <i className="text-gray-500 fas fa-briefcase fa-lg mr-1 mt-3"></i>
                  <p className=" text-center text-xl">
                    Solution Manager - Creative Tim Officer
                  </p>
                </span>

                <span className="flex items-center text-gray-700 mt-4">
                  <i className="text-gray-500 fas fa-university fa-lg mr-2"></i>
                  <p className="   text-center text-xl">
                    University of Computer Science
                  </p>
                </span>
              </div>
              <hr className="mt-10 text-gray-400" />
              <div className="flex flex-col items-center mt-10 mb-4">
                <p className="text-xl text-[#334155]  w-48 text-center">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range.
                </p>
                <button
                  className="text-rose-500 text-lg my-5 cursor-pointer"
                  type="button"
                >
                  Show more
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer isAdmin={true} />
      </div>
    </section>
  );
};

export default Settings;
