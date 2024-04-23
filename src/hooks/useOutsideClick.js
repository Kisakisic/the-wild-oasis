import { useEffect, useRef } from "react";

const useOutsideClick = (close) => {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick);
    },
    [ref]
  );

  return ref;
};

export default useOutsideClick;
