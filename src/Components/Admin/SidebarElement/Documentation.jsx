import { NavLink } from "react-router-dom";
const Documentation = () => {
  //   const Documentation = [
  //   "Styles",
  //   "CSS components",
  //   "angular",
  //   "Javascript",
  //   "NextJS",
  //   "React",
  //   "Svelte",
  //   "VueJS",
  // ];
  const lien =
    "https://www.creative-tim.com/learning-lab/tailwind/js/colors/notus";
  return (
    <div>
      {/* Documentation */}
      <hr className="mt-10 w-56 text-gray-300" />
      <h6 className="text-[#64748b] text-sm font-bold uppercase mt-5">
        Documentation
      </h6>
      <ul className="font-bold pt-3">
        <li className="dashList">
          <NavLink className="flex items-center" to={lien}>
            {" "}
            <i className="fas fa-paint-brush fa-lg mx-3"></i> Styles
          </NavLink>
        </li>
        <li className="dashList">
          <NavLink className="flex items-center" to={lien}>
            {" "}
            <i className="fab fa-css3-alt fa-lg mx-3"></i> CSS Components
          </NavLink>
        </li>
        <li className="dashList">
          <NavLink className="flex items-center" to={lien}>
            {" "}
            <i className="fab fa-angular fa-lg mx-3"></i> Angular
          </NavLink>
        </li>
        <li className="dashList">
          <NavLink className="flex items-center" to={lien}>
            {" "}
            <i className="fab fa-js-square fa-lg mx-3"></i> Javascript
          </NavLink>
        </li>
        <li className="dashList">
          <NavLink className="flex items-center" to={lien}>
            {" "}
            <i className="fab fa-react fa-lg mx-3"></i> NextJS
          </NavLink>
        </li>
        <li className="dashList">
          <NavLink className="flex items-center" to={lien}>
            {" "}
            <i className="fab fa-react fa-lg mx-3"></i> React
          </NavLink>
        </li>
        <li className="dashList">
          <NavLink className="flex items-center" to={lien}>
            {" "}
            <i className="fas fa-link fa-lg mx-3"></i> Svelte
          </NavLink>
        </li>
        <li className="dashList ">
          <NavLink className="flex items-center" to={lien}>
            {" "}
            <i className="fab fa-vuejs fa-lg mx-3"></i>VueJS
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Documentation;
