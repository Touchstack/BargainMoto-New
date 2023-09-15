import PropTypes from "prop-types";

function OutlinedButton({ className, buttonText }) {
  return (
    <button
      type="button"
      className={`${className} text-[#FFDD85] font-SemiBold sm:text-2xl md:text-xl text-xl text-center focus:ring-2 focus:outline-none py-2.5 rounded-xl
        px-3 pt-2.5 pb-2.5 list-none inline-block border-2 border-[#FFDD85]`}
    >
      {buttonText}
    </button>
  );
}

OutlinedButton.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};

OutlinedButton.defaultProps = {
  className: "",
  buttonText: "",
  onClick: () => {},
};

export default OutlinedButton;
