/* eslint-disable react/prop-types */
const InputLabels = ({ labels }) => {
  return (
    <label
      className="flex flex-col uppercase font-semibold text-neutral-700 mt-2"
      htmlFor={labels}
    >
      {labels}
      <input
        className="bg-white  focus:outline-blue-700 focus:outline-4 lowercase font-normal px-3 mt-2 py-3 shadow rounded-md "
        placeholder={labels}
        type="text"
        id={labels}
      />
    </label>
  );
};

export default InputLabels;
