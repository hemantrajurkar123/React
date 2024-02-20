import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../redux/modalSlice'; // Assuming modalSlice.js is in the same directory

const UserIconComponent = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.modal.isOpen);

  const handleIconClick = () => {
    dispatch(openModal());
    console.log("Modal is opened");
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    console.log("Modal is closed");
  };

  return (
    <div>
      <button onClick={handleIconClick}>Open Modal</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>Modal Content</p>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          display: block;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.5);
        }
        
        .modal-content {
          background-color: white;
          margin: 15% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
        }
        
        .close {
          color: #aaaaaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        
        .close:hover,
        .close:focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default UserIconComponent;
