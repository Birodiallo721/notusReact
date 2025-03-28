import Header from "./Auth/Header";
import Footer from "./Auth/Footer";
const Profile = () => {
  return (
    <div className="bg-[#c5cfdb] ">
      <div className="absolute w-full  ">
        <Header isHome={false} />
      </div>
      <div className="h-screen w-full">
        <section
          className="w-full h-full bg-no-repeat relative bg-cover bg-center ProfileclipPaths "
          style={{ backgroundImage: "url(src/assets/img/profileHome.avif)" }}
        >
          <div className="w-full h-full bg-black opacity-50 absolute ProfileclipPaths">
            {" "}
          </div>
        </section>
      </div>
      <div className="bg-white relative -top-60 mx-16 rounded-lg drop-shadow-2xl ">
        <img
          className="w-40 h-40 rounded-full mx-auto relative -top-16 shadow-2xl "
          src="src\assets\img\team-2-800x800.jpg"
          alt="Team"
        />
        <div className="flex items-center justify-between absolute top-8 w-full px-32  ">
          <div className="flex justify-around w-96">
            <span className="flex flex-col items-center">
              <h6 className="font-bold text-[#3b4859] text-xl">22</h6>
              <p className="text-[#627895]">Friends</p>
            </span>
            <span className="flex flex-col items-center">
              <h6 className="font-bold text-[#3b4859] text-xl">10</h6>
              <p className="text-[#627895]">Photos</p>
            </span>

            <span className="flex flex-col items-center">
              <h6 className="font-bold text-[#3b4859] text-xl">89</h6>
              <p className="text-[#627895]">Comments</p>
            </span>
          </div>

          <button
            className="bg-pink-500 text-white font-semibold rounded-sm uppercase py-1.5 px-2.5"
            type="button"
          >
            Connect
          </button>
        </div>
        <div className="flex flex-col items-center  relative top-1 ">
          <h6 className="text-4xl font-semibold text-gray-800 py-2">
            Jenna Stones
          </h6>
          <span className="flex items-center py-4">
            <i className="text-gray-500 fas fa-map-marker-alt fa-lg mr-4 "></i>

            <p className="text-sm font-bold uppercase text-gray-400">
              {" "}
              Los Angeles, California{" "}
            </p>
          </span>
          <span className="flex items-center pt-5">
            <i className="text-gray-500 fas fa-briefcase fa-lg mr-2"></i>
            <p className="text-gray-500 text-lg">
              Solution Manager - Creative Tim Officer
            </p>
          </span>
          <span className="flex items-center pt-3 pb-10 ">
            <i className="text-gray-500 fas fa-university fa-lg mr-2"></i>
            <p className="text-gray-500 text-lg">
              University of Computer Science
            </p>
          </span>
        </div>
        <hr className="text-gray-300 mx-7" />
        <div className="flex flex-col items-center  py-10 ">
          <p className="text-xl text-gray-700 w-245 text-center ">
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <a href="#" className="text-pink-600 pt-5 text-lg">
            Show more
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
