/* eslint-disable react/prop-types */
const InputLabel = ({ labels, defaultValue }) => {
  return (
    <label
      className="flex flex-col uppercase font-semibold text-neutral-700 "
      htmlFor={labels}
    >
      {labels}
      <input
        className="bg-white focus:outline-blue-700 focus:outline-4 lowercase font-normal px-3 mt-2 py-3 shadow rounded-md "
        defaultValue={defaultValue}
        type="text"
        id={labels}
        name={labels}
        maxLength={20}
      />
    </label>
  );
};

export default InputLabel;
