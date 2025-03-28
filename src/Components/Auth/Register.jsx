import Header from "./Header";
import FooterAdmin from "../Admin/Footer";
import { useState } from "react";
const Register = () => {
  const [users, SetUsers] = useState({});
  const onSubmitForm = (e) => {
    e.preventDefault();
    const dataFrom = new FormData(e.target);
    const infos = {
      Name: dataFrom.get("Name"),
      Email: dataFrom.get("Email"),
      Password: dataFrom.get("Password"),
    };

    SetUsers(infos);
  };
  return (
    <section className="w-full h-full min-h-screen bg-[#1E293B] ">
      <div
        className="w-full h-full bg-cover bg-no-repeat  "
        style={{
          backgroundImage: "url('src/assets/img/register_bg_2.png')",
        }}
      >
        <Header isHome={false} />
        {/* donner centrale debut */}

        <div className="container mx-auto flex flex-col items-center py-24  ">
          <div className="w-2xl rounded-xl bg-[#E2E8F0]  py-5 px-5  ">
            <h6 className="font-bold text-gray-500 text-center">
              Sign in with
            </h6>
            <div className="mt-3.5 flex items-center justify-center">
              <button
                className="uppercase bg-white text-gray-700 text-sm px-4 py-2.5 font-bold mx-1 rounded-sm flex items-center justify-center"
                type="button"
              >
                <img
                  className="w-5 h-5 mr-1"
                  src="src\assets\img\github.svg"
                  alt="image Github"
                />
                Github
              </button>
              <button
                className="uppercase bg-white text-gray-700 text-sm px-4 py-2.5 font-bold mx-1 rounded-sm flex items-center justify-center"
                type="button"
              >
                <img
                  className="w-5 h-5 mr-1"
                  src="src\assets\img\google.svg"
                  alt="image Github"
                />
                Google
              </button>
            </div>
            <hr className="text-gray-300  my-8" />
            <p className="font-semibold text-gray-400 text-center">
              Or sign in with credentials
            </p>
            <form className="mx-7" onSubmit={onSubmitForm}>
              <label
                className="flex flex-col uppercase font-semibold text-neutral-700 mt-5 "
                htmlFor="Name"
              >
                Name *
                <input
                  className="bg-white focus:outline-blue-700 focus:outline-4 font-normal px-3 mt-2 py-3 shadow rounded-md "
                  type="text"
                  id="Name"
                  placeholder="Name"
                  name="Name"
                />
              </label>
              <label
                className="flex flex-col uppercase font-semibold text-neutral-700 mt-5 "
                htmlFor="Email"
              >
                Email *
                <input
                  className="bg-white focus:outline-blue-700 focus:outline-4 font-normal px-3 mt-2 py-3 shadow rounded-md "
                  type="text"
                  id="Email"
                  placeholder="Email"
                  name="Email"
                />
              </label>
              <label
                className="flex flex-col uppercase font-semibold text-neutral-700 mt-2 "
                htmlFor="Password"
              >
                Password *
                <input
                  className="bg-white focus:outline-blue-700 focus:outline-4 font-normal px-3 mt-2 py-3 shadow rounded-md "
                  type="Password"
                  id="Password"
                  placeholder="Password"
                  name="Password"
                />
              </label>
              <label
                className="flex flex-row items-center font-semibold text-gray-700 mt-4 cursor-pointer "
                htmlFor="Remember"
              >
                <input
                  className="h-5 w-5 mr-2 outline-0 rounded-2xl "
                  type="checkbox"
                  id="Remember"
                />
                I agree with the{" "}
                <p className="ml-1 text-rose-500"> Privacy Policy</p>
              </label>
              <button
                className="uppercase bg-[#1E293B] text-white font-bold w-full py-3 my-7 rounded active:bg-[#2f3f59] "
                type="submit"
              >
                Create Account
              </button>
            </form>
            {users.Name && (
              <div className="mx-5 font-semibold text-gray-700">
                <p>Name : {users.Name}</p>
                <p>Email : {users.Email}</p>
                <p>Password : {users.Password}</p>
              </div>
            )}
          </div>
        </div>
        {/* donner centrale fin */}
      </div>
      <FooterAdmin isAdmin={false} />
    </section>
  );
};

export default Register;
