import BoxListFooter from "./BoxListFooter";
const Footer = () => {
  let ListOne = ["About Us", "Blog", "Github", "Free Products"];
  let ListTwo = [
    "MIT License",
    "Terms & Conditions",
    "Privacy Policy",
    "Contact Us",
  ];
  return (
    <footer className="bg-[#c5cfdb] -mt-[600px] pt-[590px] max-md:-mt-330  max-lg:text-center  ">
      <section className="-mt-30 flex justify-between flex-row  pb-10 mx-20 max-lg:flex-col  max-md:w-4/5  max-md:mx-auto   max-lg:items-center max-xl:mx-10">
        <div className="pl-1  max-md:pl-0">
          <h3 className="text-[#334155] font-semibold text-3xl">
            Let&apos;s keep in touch!{" "}
          </h3>
          <p className="text-[#334155] font-medium  text-xl  max-lg:font-normal">
            {" "}
            Find us on any of these platforms, we respond 1-2 business days.
          </p>
          <div className="flex mx-3  max-lg:justify-center">
            <div className="bg-white w-12 h-12 rounded-full my-5 mr-3 flex items-center justify-center  ">
              <i className="text-[#38BDF8] fab fa-twitter fa-lg "></i>
            </div>
            <div className="bg-white w-12 h-12 rounded-full my-5 mr-3 flex items-center justify-center  ">
              <i className="text-[#0284C7] fab fa-facebook-square fa-lg "></i>
            </div>
            <div className="bg-white w-12 h-12 rounded-full my-5 mr-3 flex items-center justify-center  ">
              <i className="text-[#F472BD] fab fa-dribbble fa-lg "></i>
            </div>
            <div className="bg-white w-12 h-12 rounded-full my-5 mr-3 flex items-center justify-center  ">
              <i className="text-black fab fa-github fa-lg "></i>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-96 mr-16 max-lg:flex-col  max-md:mr-0 max-md:w-full max-md:justify-center max-xl:justify-end  ">
          <BoxListFooter titre="Useful Links" lists={ListOne} />
          <BoxListFooter titre="Other Resources" lists={ListTwo} />
        </div>
      </section>
      <section>
        <hr className="mx-20 text-white " />
        <p className="py-8 text-center text-[#64748b] font-semibold text-[16px] ">
          Copyright © 2025 Notus Tailwind JS by{" "}
          <a className="hover:text-black" href="">
            Creative Tim
          </a>{" "}
          .
        </p>
      </section>
    </footer>
  );
};

export default Footer;
