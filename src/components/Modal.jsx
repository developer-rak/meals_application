import { useGlobalContext } from "../context";

const Modal = () => {
    return <aside className="modal-overlay">
        <div className="modal-container">
            Modal content here
        </div>
    </aside>
}
 
export default Modal;