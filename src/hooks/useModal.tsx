import { useState } from "react";

const useModal = () => {
//   const [isOpen, setisOpen] = useState(false);
  const [isOpen, setisOpen] = useState<boolean>(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggle
  };
}

export default useModal;