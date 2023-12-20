import {FaXmark} from 'react-icons/fa6'
import PropTypes from 'prop-types';

const Modal = ({show, onClose, children}) => {
    if (!show) return null;
    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
      };
     
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
      onClick={handleClose}
      style={{ width: '100vw' }}
    >
    <div className="flex justify-end p-5">
        <FaXmark className="text-white text-5xl cursor-pointer" onClick={() => onClose()} />
    </div>
     <div className='flex items-center justify-center h-[70%]'>
      {children}
     </div>
    </div>
  )
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

export default Modal
