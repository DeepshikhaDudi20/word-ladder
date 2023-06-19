import "../../styles/Modal.scss";
import Button from "./Button";

const Modal = ({ onClose }) => (
  <div className="modal">
    <div className="modal__content">
      <h2>Error</h2>
      <p>No solution found.</p>
      <Button label="Close" onClick={onClose}>
        Close
      </Button>
    </div>
  </div>
);

export default Modal;
