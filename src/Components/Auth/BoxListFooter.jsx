/* eslint-disable react/prop-types */
const BoxListFooter = ({ titre, lists }) => {
  return (
    <ul className="text-[#1e293b] font-medium  max-lg:font-normal">
      <h3 className="text-[#64748b] font-semibold uppercase max-xl:w-32">
        {titre}
      </h3>
      {lists.map((list) => {
        return (
          <li key={list} className="my-1">
            <a href="#">{list}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default BoxListFooter;
