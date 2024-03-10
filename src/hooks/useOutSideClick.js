import { useEffect, useRef } from "react";

const useOutSideClick = (handler, listerCapturing = true) => {
  const ref = useRef();
  useEffect(() => {
    const outSideHandler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handler();
    };
    document.addEventListener("click", outSideHandler, listerCapturing);

    return () => {
      document.removeEventListener("click", outSideHandler, listerCapturing);
    };
  }, [handler, listerCapturing]);
  return ref;
};
export default useOutSideClick;
