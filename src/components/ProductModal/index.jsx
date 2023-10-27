import ReactDOM  from "react-dom";

function ProductModal({ children }) {
  return ReactDOM.createPortal(
    <div className="bg-[rgba(43,45,51,0.8)] flex justify-center items-center fixed top-0 bottom-0 inset-x-0 z-10">
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { ProductModal };