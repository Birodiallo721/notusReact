/* eslint-disable react/prop-types */
const BoxHeader = ({ titres, montants, couleurs, tabElemetClass }) => {
  const [titre, sousTitre] = titres;
  const [montant, sousMontant] = montants;
  const [rounder, monteur] = couleurs;

  return (
    <div className="bg-amber-50 rounded p-4">
      <span className="flex justify-between items-center mb-4">
        <div>
          <p className="text-[#94a3b8] uppercase font-bold">{titre}</p>
          <h6 className="text-[#334155] font-semibold text-xl">{montant}</h6>
        </div>
        <div
          className={`${rounder} h-16 w-16 rounded-full shadow-xs flex items-center justify-center`}
        >
          {" "}
          <i className={`text-white ${tabElemetClass} fa-lg`}></i>
        </div>
      </span>
      <h6 className="text-[#94a3b8]">
        {" "}
        <span className={`${monteur}`}>{sousMontant}</span> {sousTitre}
      </h6>
    </div>
  );
};

export default BoxHeader;
