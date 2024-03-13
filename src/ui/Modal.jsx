import { HiOutlineX } from "react-icons/hi";
import useOutSideClick from "../hooks/useOutSideClick";

const Modal = ({ open, close, title, children }) => {
  const ref = useOutSideClick(close);
  return (
    <div
      className="backdrop-blur-sm fixed top-0 left-0 w-full 
      h-screen bg-secondary-800/30 z-40"
    >
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 -translate-x-1/2  z-50
        -translate-y-1/2 p-4 rounded-lg bg-neutral-100 
        shadow-lg tr-300 w-[calc(100vw-70rem)] md:max-w-xl max-h-[calc(100vh-10rem)] overflow-y-auto"
      >
        <div className="flex  items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
          <p className="text-secondary-700 font-VazirBold text-base">{title}</p>
          <button onClick={close}>
            <HiOutlineX className="w-5 h-5 text-secondary-500" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;
