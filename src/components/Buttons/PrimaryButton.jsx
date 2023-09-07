import PropTypes from "prop-types";

function PrimaryButton({ className, buttonText, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${className} text-[#5C2E14] focus:ring-1 focus:outline-none focus:ring-amber-100 font-SemiBold rounded-lg text-xl items-center text-center list-none inline-block 
       text-md px-4 py-2.5 md:mr-0 bg-[#F3B757] pt-3 pb-3`}
    >
      {buttonText}
    </button>
  );
}

PrimaryButton.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  className: "",
  buttonText: "",
  onClick: () => {},
};

export default PrimaryButton;
