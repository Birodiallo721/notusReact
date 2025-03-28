import Header from "./Auth/Header";
import Footer from "./Auth/Footer";
import InputLabels from "./InputLabels";
import LandingProfile from "./LandingProfile";
// import Footer from "./Auth/Footer";
const Landing = () => {
  const infoProfile = [
    {
      urlImg: "src/assets/img/team-1-800x8000.jpg",
      Nom: "Ryan Tompson",
      Fonction: "Web Developer",
    },
    {
      urlImg: "src/assets/img/team-2-800x800.jpg",
      Nom: "Romina Hadid",
      Fonction: "Marketing Specialist",
    },
    {
      urlImg: "src/assets/img/team-3-800x800.jpg",
      Nom: "Alexa Smith",
      Fonction: "UI/UX Designer",
    },
    {
      urlImg: "src/assets/img/team-4-470x470.png",
      Nom: "Jenna Kardi",
      Fonction: "Founder and CEO",
    },
  ];
  return (
    <div className="bg-[#c5cfdb] ">
      <section className="absolute w-full  flex flex-col items-center">
        <Header isHome={false} />
        <div className="text-white text-center w-2xl h-screen z-20  flex flex-col items-center justify-center ">
          <h2 className="font-semibold text-5xl my-4">
            Your story starts with us.
          </h2>
          <p className="text-xl text-[#E2E8F0] mx-2.5 ">
            This is a simple example of a Landing Page you can build using Notus
            Tailwind JS. It features multiple CSS components based on the
            Tailwind CSS design system.
          </p>
        </div>
      </section>

      <section className="h-screen w-full ">
        <div
          className="w-full h-full bg-no-repeat relative bg-cover bg-center LandingclipPaths "
          style={{ backgroundImage: "url(src/assets/img/landingHome.avif)" }}
        >
          <div className="w-full h-full bg-black opacity-50 absolute  LandingclipPaths flex items-center  "></div>
        </div>
      </section>
      <div className=" relative -top-16 mx-16 rounded-lg drop-shadow-2xl -z-0 grid grid-cols-3 gap-8 pb-28">
        <div className="bg-white rounded-xl flex flex-col items-center py-5 col-start-1 ">
          <div className="bg-[#F87171] h-16 w-16 shadow-xl  rounded-full flex items-center justify-center  ">
            {" "}
            <i className="text-white fas fa-award fa-lg "></i>
          </div>
          <h5 className="font-semibold text-xl text-[#27313f] my-5">
            Awarded Agency
          </h5>
          <p className="text-gray-700 px-4 pb-6 text-lg text-center">
            Divide details about your product or agency work into parts. A
            paragraph describing a feature will be enough.
          </p>
        </div>
        <div className="bg-white rounded-xl flex flex-col items-center py-5 col-start-2 relative -top-20">
          <div className="bg-[#38BDF8] h-16 w-16 shadow-xl  rounded-full flex items-center justify-center  ">
            {" "}
            <i className="text-white fas fa-retweet fa-lg "></i>
          </div>
          <h5 className="font-semibold text-xl text-[#27313f] my-5">
            Free Revisions
          </h5>
          <p className="text-gray-700 px-4 pb-6 text-lg text-center">
            Keep you user engaged by providing meaningful information. Remember
            that by this time, the user is curious.
          </p>
        </div>
        <div className="bg-white rounded-xl flex flex-col items-center py-5 col-start-3 relative -top-8">
          <div className="bg-[#34D399] h-16 w-16 shadow-xl  rounded-full flex items-center justify-center  ">
            {" "}
            <i className="text-white fas fa-fingerprint fa-lg "></i>
          </div>
          <h5 className="font-semibold text-xl text-[#27313f] my-5">
            Verified Company
          </h5>
          <p className="text-gray-700 px-4 pb-6 text-lg text-center">
            Write a few lines about each one. A paragraph describing a feature
            will be enough. Keep you user engaged!
          </p>
        </div>
      </div>
      <section className="flex justify-center pb-20 ">
        <div className="flex justify-between w-7xl ">
          <div className="w-400 mt-9">
            <div className="bg-white h-20 w-20 my-5 shadow-xl  rounded-full flex items-center justify-center">
              <i className="text-gray-500 fas fa-user-friends fa-xl "></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-gray-800">
              Working with us is a pleasure
            </h3>
            <p className="text-xl font-light leading-relaxed my-4 text-gray-600 w-135">
              Don&apos;t let your uses guess by attaching tooltips and popoves
              to any element. Just make sure you enable them first via
              JavaScript.
            </p>{" "}
            <p className="text-xl font-light leading-relaxed mt-4 mb-4 text-gray-600 w-135">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you&apos;re good to
              go. Just make sure you enable them first via JavaScript.
            </p>{" "}
            <p className="font-bold text-gray-800 mt-8">
              Check Notus Tailwind JS!
            </p>
          </div>
          <div className="bg-pink-500 mx-12 w-225 rounded-xl">
            <img
              className="rounded-t-xl LandingclipPaths"
              src="src\assets\img\NotchServices.avif"
              alt="informaticien"
            />
            <div className="text-white p-9">
              <h4 className="font-bold text-2xl">Top Notch Services</h4>
              <p className="font-light text-lg ">
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center LandingclipPathsTop pt-40 pb-120 bg-white">
        <div className="flex justify-between w-7xl ">
          <img
            className="rounded-xl mx-12 w-110 "
            src="src\assets\img\GetShit.avif"
            alt="informaticien"
          />
          <div className=" mt-28  mr-16   ">
            <div className="bg-pink-300 h-20 w-20 my-5 shadow-xl  rounded-full flex items-center justify-center ">
              <i className="text-pink-600 fas fa-rocket fa-xl "></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-gray-800">
              A growing company
            </h3>
            <p className="text-xl font-medium leading-relaxed my-4 text-gray-700 w-130">
              The extension comes with three pre-built pages to help you get
              started faster. You can change the text and images and you&apos;re
              good to go.
            </p>{" "}
            <span>
              <p className="flex items-center text-gray-600">
                <div className="bg-pink-300 h-10 w-10 my-1 shadow-xl rounded-full mr-5 flex items-center justify-center">
                  <i className="text-pink-600 fas fa-fingerprint fa-lg "></i>
                </div>
                Carefully crafted components
              </p>
              <p className="flex items-center text-gray-600">
                <div className="bg-pink-300 h-10 w-10 my-1 shadow-xl rounded-full mr-5 flex items-center justify-center">
                  <i className="text-pink-600 fab fa-html5 fa-lg "></i>
                </div>
                Amazing page examples
              </p>
              <p className="flex items-center text-gray-600">
                <div className="bg-pink-300 h-10 w-10 my-1 shadow-xl rounded-full mr-5 flex items-center justify-center">
                  <i className="text-pink-600 far fa-paper-plane fa-lg "></i>
                </div>
                Dynamic components
              </p>
            </span>
          </div>
        </div>
        <div className="mt-40 mb-28 flex flex-col items-center">
          <h3 className="text-5xl font-semibold text-gray-800 pb-5">
            Here are our heroes
          </h3>
          <p className="text-xl text-gray-500 pb-5 w-150 text-center">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </p>
        </div>
        <div className="flex justify-evenly w-full ">
          <div>
            <LandingProfile
              UrlImgae={infoProfile[0].urlImg}
              Nom={infoProfile[0].Nom}
              Fonction={infoProfile[0].Fonction}
            />
            <span className="flex justify-center mt-4 ">
              <div className="bg-[#38BDF8] h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-twitter fa-lg "></i>
              </div>
              <div className="bg-[#0284C7] h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-facebook-f fa-lg "></i>
              </div>
              <div className="bg-[#EC4899] h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-dribbble fa-lg "></i>
              </div>
            </span>
          </div>
          <div>
            <LandingProfile
              UrlImgae={infoProfile[1].urlImg}
              Nom={infoProfile[1].Nom}
              Fonction={infoProfile[1].Fonction}
            />
            <span className="flex justify-center mt-4">
              <div className="bg-red-600 h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-google fa-lg "></i>
              </div>{" "}
              <div className="bg-[#0284C7] h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-facebook-f fa-lg "></i>
              </div>
            </span>
          </div>
          <div>
            <LandingProfile
              UrlImgae={infoProfile[2].urlImg}
              Nom={infoProfile[2].Nom}
              Fonction={infoProfile[2].Fonction}
            />
            <span className="flex justify-center mt-4">
              <div className="bg-red-600 h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-google fa-lg "></i>
              </div>
              <div className="bg-[#38BDF8] h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-twitter fa-lg "></i>
              </div>
              <div className="bg-gray-700 h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-instagram fa-lg "></i>
              </div>
            </span>
          </div>
          <div>
            <LandingProfile
              UrlImgae={infoProfile[3].urlImg}
              Nom={infoProfile[3].Nom}
              Fonction={infoProfile[3].Fonction}
            />
            <span className="flex justify-center mt-4">
              <div className="bg-[#EC4899] h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-dribbble fa-lg "></i>
              </div>
              <div className="bg-red-600 h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-google fa-lg "></i>
              </div>
              <div className="bg-[#38BDF8] h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-twitter fa-lg "></i>
              </div>
              <div className="bg-gray-700 h-10 w-10 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
                <i className="text-white fab fa-instagram fa-lg "></i>
              </div>
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#1E293B] z-50 w-full  relative py-20 px-1 -top-80 flex flex-col items-center LandingclipPathsTopBottom">
        <div className="border-t-1  border-white w-full flex justify-center relative -top-1.5 ">
          <div className="w-150 text-center pt-24">
            <h5 className=" text-white text-4xl font-semibold my-4">
              Build something{" "}
            </h5>
            <p className="text-gray-400 text-lg leading-relaxed mt-4 mb-4">
              Put the potentially record low maximum sea ice extent tihs year
              down to low ice. According to the National Oceanic and Atmospheric
              Administration, Ted, Scambos.
            </p>
          </div>
        </div>
        <div className=" flex justify-center my-9 w-full ">
          <div className="flex flex-col items-center w-85 mx-5">
            <div className="bg-white h-16 w-16 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
              <i className="text-[#1E293B] fas fa-medal fa-xl "></i>
            </div>
            <h4 className="text-2xl mt-5 font-semibold text-white">
              Excelent Services
            </h4>
            <p className="mt-2 mb-4 text-gray-400 text-center text-xl">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
          </div>
          <div className="flex flex-col items-center w-85 mx-5">
            <div className="bg-white h-16 w-16 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
              <i className="text-[#1E293B] fas fa-poll fa-xl "></i>
            </div>
            <h4 className="text-2xl mt-5 font-semibold text-white">
              Grow your market
            </h4>
            <p className="mt-2 mb-4 text-gray-400 text-center text-xl">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
          </div>
          <div className="flex flex-col items-center w-85 mx-5 ">
            <div className="bg-white h-16 w-16 my-1 shadow-xl rounded-full mr-1 flex items-center justify-center">
              <i className="text-[#1E293B] fas fa-lightbulb fa-xl "></i>
            </div>
            <h4 className="text-2xl mt-5 font-semibold text-white">
              Launch time
            </h4>
            <p className="mt-2 mb-4 text-gray-400 text-center text-xl">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
          </div>
        </div>
        <div className="w-full my-10 flex justify-center">
          <div className="bg-gray-300 rounded-lg w-2xl p-15 ">
            <span>
              <h5 className="text-3xl font-semibold text-gray-800">
                Want to work with us?{" "}
              </h5>
              <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                Complete this form and we will get back to you in 24 hours.
              </p>
            </span>
            <form className="w-full">
              <InputLabels labels="Full Name" />
              <InputLabels labels="Email" />
              <label
                className="flex flex-col uppercase font-semibold text-neutral-700 mt-2"
                htmlFor="Message"
              >
                Message
              </label>
              <textarea
                className="bg-white focus:outline-blue-700 focus:outline-4 font-normal px-3 mt-2 py-3 shadow rounded-md w-full h-64 "
                placeholder="Type a message..."
                name="Message"
                id="Message"
              ></textarea>
              <div className="text-center">
                <button
                  className="bg-[#1E293B] font-semibold rounded-md uppercase text-white px-6.5 py-3 mt-5 shadow-2xs"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <hr className="text-gray-500 relative -top-80 " />

      <Footer />
    </div>
  );
};

export default Landing;
