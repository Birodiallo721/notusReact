import Footer from "../Footer";
import Header from "../Header";
import CardInputBorder from "./CardInputBorder";

const index = () => {
  const CssComponents = [
    "Buttons",
    "Inputs",
    "Labels",
    "Menus",
    "Navbars",
    "Pagination",
    "Progressbars",
    "Typography",
  ];
  const JavaScriptComponents = [
    "Alerts",
    "Dropdowns",
    "Menus",
    "Modals",
    "Navbars",
    "Popovers",
    "Tabs",
    "Tooltips",
  ];
  return (
    <div className="overflow-hidden w-full ">
      <Header isHome={true} />
      <main className="pt-[70px]  ">
        {/* Notus Tailwind JS  */}
        <section className="relative h-screen ">
          <div className=" ml-20 pt-44 max-sm:ml-2 max-sm:pt-10  max-xl:ml-2 max-lg:w-1/2 max-lg:pt-24 max-2xl:pt-60">
            <h1 className="w-[500px] pb-5 font-semibold text-4xl text-[#475569] max-sm:w-xs max-sm:text-3xl max-xl:w-[400px]">
              {/*  */} Notus Tailwind JS - A beautiful extension for Tailwind
              CSS.
            </h1>
            <p className="text-[#64748b] font-semibold text-lg font-sans w-[600px] max-sm:w-xs max-lg:font-normal max-xl:w-[450px]">
              Notus Tailwind JS is Free and Open Source. It does not change any
              of the CSS from Tailwind CSS. It features multiple HTML elements
              and it comes with dynamic components for ReactJS. Vue and Angular.
            </p>
            <div className="mt-10 text-white font-bold max-md:flex max-md:justify-evenly  w-96 max-[380px]:jus max-[380px]:w-80 max-[380px]:font-semibold">
              <button
                className="bg-pink-500 uppercase px-6 py-3 rounded-md mx-2 max-[380px]:px-3  "
                type="button"
              >
                <a href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus?ref=njs-index">
                  Get started
                </a>
              </button>
              <button
                className="bg-gray-800 uppercase px-6 py-3 rounded-md mx-2 max-[380px]:px-3 "
                type="button"
              >
                <a href="https://github.com/creativetimofficial/notus-js?ref=njs-index">
                  Github Star
                </a>
              </button>
            </div>
          </div>
          {/* w-[760px] */}
          <img
            className="absolute top-1.5 right-0 -z-20  h-full object-cover max-sm:hidden max-xl:h-fit max-2xl:w-1/2 max-xl:object-cover max-lg:-top-1.5 max-2xl:h-fit "
            src="src/assets/img/ill_header_3.png"
            alt="ill_header_3"
          />
        </section>
        {/* box Clip Paths */}
        <div className="bg-[#E2E8F0] h-30 -mt-10  boxClipPaths max-lg:mt-0 max-2xl:mt-15"></div>
        {/* Container General */}
        <div className="bg-[#E2E8F0] pb-64 h-full  ">
          {/* Great for your awesome project */}
          <section className="grid grid-cols-2 gap-30 justify-self-center max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:mx-5 ">
            {/* droit */}
            <div className="bg-[#EC4899] rounded-lg w-[450px] relative -top-20 ml-10 max-md:ml-0  max-md:w-72 max-md:flex max-md:flex-col max-md:justify-self-center max-lg:w-96 max-xl:ml-0  max-lg:h-135 ">
              <img
                className="rounded-t-md [clip-path:polygon(0%_0%,_0%_0%,_0%_100%,_100%_90%,_100%_0%)] w-full "
                src="src\assets\img\code.png"
                alt="code"
              />
              <div className="p-10 text-white">
                <h3 className="text-2xl pb-3 font-bold">
                  Great for your awesome project
                </h3>
                <p className="pr-3 max-md:pr-0">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </div>
            </div>
            {/* gauche */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2  ml-10 max-md:grid-cols-1 max-md:grid-rows-4 max-md:ml-5 max-md:mt-9 ">
              <div className="mx-3 w-60  max-lg:w-28 max-xl:w-45 ">
                <div className="bg-white w-12 h-12 rounded-4xl flex justify-center items-center shadow-black shadow-2xl ">
                  {" "}
                  <i className="text-gray-500 fas fa-sitemap fa-lg "></i>
                </div>

                <h3 className="font-semibold text-xl text-[#334155] py-3">
                  CSS Components
                </h3>
                <p className="text-[#64748b] text-[16px] font-normal ">
                  {" "}
                  Notus Tailwind JS comes with a huge number of Fully Coded CSS
                  components.
                </p>
              </div>
              <div className="mx-3 w-60 max-lg:w-28 max-xl:w-45">
                <div className="bg-white w-12 h-12 rounded-4xl flex justify-center items-center shadow-black shadow-2xl ">
                  {" "}
                  <i className="text-gray-500 fas fa-newspaper fa-lg "></i>
                </div>
                <h3 className="font-semibold text-xl text-[#334155] py-3">
                  Pages
                </h3>
                <p className="text-[#64748b] text-[16px] font-normal">
                  This extension also comes with 3 sample pages. They are fully
                  coded so you can start working instantly.
                </p>
              </div>
              <div className="mx-3 w-60  max-lg:w-28 max-xl:w-45">
                <div className="bg-white w-12 h-12 rounded-4xl flex justify-center items-center shadow-black shadow-2xl ">
                  {" "}
                  <i className="text-gray-500 fas fa-drafting-compass fa-lg "></i>
                </div>
                <h3 className="font-semibold text-xl text-[#334155] py-3">
                  JavaScript Components
                </h3>
                <p className="text-[#64748b] text-[16px] font-normal">
                  We also feature many dynamic components for React, NextJS, Vue
                  and Angular.
                </p>
              </div>
              <div className="mt-7 mx-3 w-60  max-lg:w-28 max-xl:w-45">
                <div className="bg-white w-12 h-12 rounded-4xl flex justify-center items-center shadow-black shadow-2xl ">
                  {" "}
                  <i className="text-gray-500 fas fa-file-alt fa-lg "></i>
                </div>
                <h3 className="font-semibold text-xl text-[#334155] py-3">
                  Documentation
                </h3>
                <p className="text-[#64748b] text-[16px] font-normal">
                  Built by developers for developers. You will love how easy is
                  to to work with Notus Tailwind JS.
                </p>
              </div>
            </div>
          </section>
          {/* Deuxieme bloc */}
          <section className="mt-32 pb-5 flex justify-center  w-full gap-50  max-sm:mx-0 max-sm:flex-col max-xl:justify-between max-xl:mr-0 ">
            <div className="w-[400px] mt-20  max-md:w-xs  max-md:mx-9  max-lg:w-56 max-xl:w-64">
              <div className="bg-white w-20 h-20 rounded-full mb-10 flex justify-center items-center shadow-black shadow-2xl ">
                {" "}
                <i className="text-gray-500 fas fa-sitemap fa-lg "></i>
              </div>
              <h3 className="font-semibold text-3xl text-[#334155] ">
                CSS Components
              </h3>
              <p className="font-light text-lg text-[#334155] my-5 max-md:w-56">
                {" "}
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p>
              <CardInputBorder elementInput={CssComponents} />
              <p className="py-5">
                <a className="font-bold text-[#1e2632] text-lg" href="#">
                  View All
                </a>
              </p>
            </div>
            <div className="w-[600px] relative  max-lg:w-[400px] max-xl:ml-10 ">
              {/* Github */}
              <div className="absolute left-28 max-md:left-9 max-lg:left-26 ">
                <img
                  className="w-48 h-60 rounded-md shadow-2xl"
                  src="src\assets\img\component-info-card.png"
                  alt="info card"
                />
                <img
                  className="w-28 h-10 rounded-md relative bottom-5 left-28 shadow-2xl"
                  src="src\assets\img\component-btn.png"
                  alt="info card"
                />
              </div>
              {/* Regular */}
              <div className=" absolute right-5 top-20 max-md:right-32 max-lg:-right-48">
                <img
                  className="w-48 h-60 rounded-md shadow-2xl"
                  src="src\assets\img\component-profile-card.png"
                  alt="info card"
                />
                <img
                  className="w-28 h-10 rounded-md relative bottom-5 -left-20 shadow-2xl "
                  src="src\assets\img\component-btn-pink.png"
                  alt="info card"
                />
              </div>
              {/* Free */}
              <img
                className="h-44 rounded-md mt-72 shadow-2xl max-md:relative max-md:-left-12  "
                src="src\assets\img\component-info-2.png"
                alt="info card"
              />

              {/* Menu */}
              <img
                className="rounded-md mt-7 w-[550px]  absolute right-0 shadow-2xl max-md:-left-3 max-md:w-80 max-lg:left-20 max-lg:w-68 max-xl:left-3 "
                src="src\assets\img\component-menu.png"
                alt="info card"
              />
            </div>
          </section>
          {/* Troisieme bloc */}
          <section className="mt-32 grid grid-cols-2 max-md:grid-cols-1  justify-self-center ">
            <div className="grid grid-cols-2  gap-8 max-lg:grid-cols-1  max-md:px-5 max-md:gap-2">
              {/* //Droite */}
              <div className="flex flex-col w-full gap-10 ">
                {/* //Svelte */}
                <div className="bg-[#FF3E00] w-full  cursor-pointer h-45 rounded-lg flex flex-col justify-center items-center ">
                  <img
                    className="w-20 h-20 my-5 rounded-full "
                    src="src\assets\img\svelte.jpg"
                    alt="svelte"
                  />
                  <h5 className="font-semibold text-white text-lg">Svelte</h5>
                </div>
                {/* //ReactJS */}
                <div className="bg-[#0EA5E9] w-full  cursor-pointer h-45 rounded-lg flex flex-col justify-center items-center ">
                  <img
                    className="w-20 h-20 my-5 rounded-full "
                    src="src\assets\img\react.jpg"
                    alt="React"
                  />
                  <h5 className="font-semibold text-white text-lg">React</h5>
                </div>
                {/* //NextJS */}
                <div className="bg-[#334155] w-full  cursor-pointer h-45 rounded-lg flex flex-col justify-center items-center ">
                  <img
                    className="w-20 h-20 my-5 rounded-full "
                    src="src\assets\img\nextjs.jpg"
                    alt="NextJS"
                  />
                  <h5 className="font-semibold text-white text-lg">Next JS</h5>
                </div>
              </div>

              {/* //Gauche */}
              <div className="flex flex-col  w-full  mt-10 gap-10">
                {/* //JavaScript */}
                <div className="bg-[#EAB308] w-full  cursor-pointer h-45 rounded-lg flex flex-col justify-center items-center ">
                  <img
                    className="w-20 h-20 my-5 rounded-full "
                    src="src\assets\img\js.png"
                    alt="JavaScript"
                  />
                  <h5 className="font-semibold text-white text-lg">
                    JavaScript
                  </h5>
                </div>
                {/* //Angular */}
                <div className="bg-red-800 w-full  cursor-pointer h-45 rounded-lg flex flex-col justify-center items-center ">
                  <img
                    className="w-20 h-20 my-5 rounded-full "
                    src="src\assets\img\angular.jpg"
                    alt="Angular"
                  />
                  <h5 className="font-semibold text-white text-lg">Angular</h5>
                </div>
                {/* //Vue.js */}
                <div className="bg-[#10B981]  cursor-pointer h-45 rounded-lg flex flex-col justify-center items-center ">
                  <img
                    className="w-20 h-20 my-5 rounded-full "
                    src="src\assets\img\vue.jpg"
                    alt="Vue js"
                  />
                  <h5 className="font-semibold text-white text-lg">Vue js</h5>
                </div>
              </div>
            </div>

            <div className="mt-25 mx-28 w-110 max-md:mt-48 max-md:mx-auto max-md:w-5/6 max-lg:w-4/7 max-xl:w-5/8  ">
              <div className="bg-white w-20 h-20 rounded-full mb-10 flex justify-center items-center shadow-black shadow-2xl ">
                {" "}
                <i className="text-gray-500 fas fa-drafting-compass fa-lg "></i>
              </div>
              <h3 className="font-semibold text-3xl  text-[#334155]  ">
                Javascript Components
              </h3>
              <p className="font-light text-xl text-[#334155] my-5 [line-height:2] ">
                {" "}
                In order to create a great User Experience some components
                require JavaScript. In this way you can manipulate the elements
                on the page and give more options to your users.
              </p>
              <p className="font-light text-xl text-[#334155] my-5 ">
                {" "}
                We created a set of Components that are dynamic and come to help
                you.
              </p>
              <CardInputBorder elementInput={JavaScriptComponents} />
              <p className="py-5">
                <a className="font-bold text-[#1e2632] text-lg" href="#">
                  View All
                </a>
              </p>
            </div>
          </section>
          {/* Dernier bloc */}
          <section className="flex justify-self-center gap-20 py-32 pt-80 max-md:flex-col max-md:mx-auto max-md:py-60 max-lg:justify-between max-lg:mx-18 max-lg:items-center max-xl:pt-70">
            <div className="w-[460px] max-md:w-4/6 max-md:m-auto ">
              <div className="bg-white w-20 h-20 rounded-full mb-10 flex justify-center items-center shadow-black shadow-2xl ">
                {" "}
                <i className="text-gray-500 fas fa-file-alt fa-2xl "></i>
              </div>
              <h3 className="font-semibold text-[34px] text-[#334155] ">
                Complex Documentation
              </h3>
              <p className="text-lg [line-height:29px] text-[#64748b] my-5 max-lg:w-[230px]">
                {" "}
                This extension comes a lot of fully coded examples that help you
                get started faster. You can adjust the colors and also the
                programming language. You can change the text and images and
                you&apos;re good to go.
              </p>
              <div>
                <div className="flex items-center">
                  <div className="bg-gray-100 px-1 rounded-full my-2 mr-5 max-md:mr-2  max-md:my-5">
                    <i className="text-gray-500 fas fa-fingerprint fa-md "></i>
                  </div>
                  <p>Built by Developers for Developers</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 px-1 rounded-full my-2 mr-5 max-md:mr-2  max-md:my-5">
                    <i className="text-gray-500 fab fa-html5 fa-md "></i>
                  </div>
                  <p>Carefully crafted code for Components</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 px-1 rounded-full my-2 mr-5 max-md:mr-2  max-md:my-5">
                    <i className="text-gray-500 fas fa-paper-plane fa-md "></i>
                  </div>
                  <p>Dynamic Javascript Components</p>
                </div>
              </div>
            </div>

            <div className="w-[700px] relative right-20 max-md:top-20 max-md:w-5/6 max-lg:top-10">
              {/* image gauche */}
              <img
                className="rounded-md relative bottom-5 left-28 "
                src="src\assets\img\documentation.png"
                alt="info card"
              />
            </div>
          </section>
          <section className=" text-center mx-12 pb-36 max-lg:mx-auto max-lg:flex max-lg:flex-col max-lg:items-center ">
            <h3 className="font-semibold text-4xl text-[#334155] max-lg:w-3/6">
              Beautiful Example Pages
            </h3>
            <p className=" font-semibold text-lg text-[#64748b] mt-5 mx-96  max-xl:mx-52  max-xl:font-normal">
              Notus Tailwind JS is a completly new product built using our past
              experience in web templates. Take the examples we made for you and
              start playing with them.
            </p>
          </section>
        </div>
        {/* image hover bouge */}
        <section className="w-full absolute z-10 text-center  max-xl:border-t-1 max-xl:border-amber-50 max-2xl: ">
          <div className="flex justify-self-center gap-20 relative -top-86 max-lg:flex-col  max-md:w-5/6 max-md:mx-auto max-2xl:mx-8 max-2xl:gap-8 ">
            {/* Login Page */}
            <div className="cursor-pointer ">
              <h4 className="text-[#334155] font-semibold text-xl pb-7 max-md:pb-2 ">
                Login Page
              </h4>
              <img
                className="w-105  rounded-lg hover:transition-all hover:-translate-y-4 max-lg:w-full"
                src="src\assets\img\login.jpg"
                alt="login"
              />
            </div>
            {/* Profile Page */}
            <div className="cursor-pointer">
              <h4 className="text-[#334155] font-semibold text-xl pb-7">
                Profile Page
              </h4>
              <img
                className=" w-105  rounded-lg hover:transition-all hover:-translate-y-4 max-lg:w-full"
                src="src\assets\img\profile.jpg"
                alt="login"
              />
            </div>
            {/* Landing Page */}
            <div className="cursor-pointer">
              <h4 className="text-[#334155] font-semibold text-xl pb-7">
                Landing Page
              </h4>
              <img
                className=" w-105  rounded-lg hover:transition-all hover:-translate-y-4 max-lg:w-full"
                src="src\assets\img\landing.jpg"
                alt="login"
              />
            </div>
          </div>
        </section>

        {/* // BoxOpenSource */}
        <section className="bg-[#475569] -mt-60 clipPaths relative overflow-hidden grid grid-cols-2 max-md:grid-cols-1 max-md:pt-[120%] max-lg:pt-350 max-xl:pb-30">
          <div className="w-[530px] py-100 ml-36 max-xl:mx-auto max-md:w-5/6 max-md:px-2 max-lg:w-75 max-xl:px-20 max-xl:w-145 ">
            <div className="bg-white w-20 h-20 rounded-full mb-10 flex justify-center items-center ">
              {" "}
              <i className="text-gray-500 fas fa-code-branch text-2xl "></i>
            </div>
            <h3 className="font-semibold text-[34px] text-white">
              Open Source
            </h3>
            <p className="font-normal text-lg [line-height:29px] text-[#8896aa] my-5">
              {" "}
              Since <i className="text-white">Tailwind CSS</i> is an open source
              project we wanted to continue this movement too. You can give this
              version a try to feel the design and also test the quality of the
              code!
            </p>
            <p className="font-normal  text-lg [line-height:29px] text-[#8896aa] my-5">
              {" "}
              Get it free on Github and please help us spread the news with a
              Star!
            </p>
            <button
              className="bg-[#334155] cursor-pointer text-white uppercase font-bold px-6 py-4 rounded-lg hover:shadow bg "
              type="button"
            >
              Github Star
            </button>
          </div>

          <div className="bg-[url('src/assets/img/github.svg')] bg-no-repeat h-220 w-full bg-cover relative top-80 -right-30  max-md:right-14  max-md:w-200 max-md:-top-110  max-md:bg-contain max-lg:right-80 max-xl:-z-10 max-lg:w-210 max-xl:right-20 max-xl:bg-contain max-xl:w-230 max-xl:top-60 "></div>
        </section>
        {/* BoxCard  */}
        <section className="mx-12 py-28 shadow-2xl relative -top-60 bg-white rounded-xl flex flex-col items-center z-10 max-md:-top-245 max-lg:w-full max-xl:m-auto max-md:text-center max-lg:px-8">
          <p className="text-5xl pb-2 max-md:text-4xl">😍</p>
          <p className="text-[#334155] font-semibold text-3xl ">
            Do you love this Starter Kit?
          </p>
          <p className="text-[#4a586c] font-normal text-xl py-6 max-w-4xl text-center ">
            Cause if you do, it can be yours now. Hit the buttons below to
            navigate to get the Free version for your next project. Build a new
            web app or give an old project a new look!
          </p>
          <div className="max-w-2xl max-md:flex max-md:flex-col max-md:gap-3 max-md:w-full">
            <button
              className="bg-[#EC4899] cursor-pointer text-white uppercase font-bold px-6 py-4 rounded mx-1 "
              type="button"
            >
              Get started
            </button>
            <button
              className="bg-[#334155] cursor-pointer text-white uppercase font-bold px-6 py-4 rounded mx-1"
              type="button"
            >
              {" "}
              <i className="text-white fab fa-github fa-lg mr-3"></i>
              Help With a Star
            </button>
          </div>
        </section>

        <div className="relative">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default index;
