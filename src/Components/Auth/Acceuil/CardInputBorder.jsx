/* eslint-disable react/prop-types */
const CardInputBorder = ({ elementInput }) => {
  return (
    <div className="w-80  flex flex-wrap max-md:w-5/6 max-lg:w-[250px] max-xl:w-[290px] ">
      {elementInput.map((eI) => {
        return (
          <span
            key={eI}
            className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-gray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
          >
            {eI}
          </span>
        );
      })}
    </div>
  );
};

export default CardInputBorder;
