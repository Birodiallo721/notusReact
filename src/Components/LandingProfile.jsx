/* eslint-disable react/prop-types */
const LandingProfile = ({ UrlImgae, Nom, Fonction }) => {
  return (
    <div className="flex flex-col items-center ">
      <img
        className="w-36 h-36 rounded-full shadow-2xl"
        src={UrlImgae}
        alt="User"
      />
      <h4 className="mt-8 font-bold text-2xl text-gray-800">{Nom}</h4>
      <p className="mt-1 font-medium text-gray-500 uppercase">{Fonction}</p>
    </div>
  );
};

export default LandingProfile;
