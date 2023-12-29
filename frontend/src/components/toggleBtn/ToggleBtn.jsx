import PropTypes from "prop-types";
import { Twirl as Hamburger } from "hamburger-react";

const ToggleBtn = ({ setIsOpen }) => {
  return (
    <>
      <div
        className="adminSideBarBtn"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Hamburger size={25} color="#1d2f43" />
      </div>
    </>
  );
};

ToggleBtn.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default ToggleBtn;
