import { useState } from "react";

interface AlertProps {
  isActive: boolean;
  closeFunction: () => void;
}

const Alert = ({ isActive = false, closeFunction }: AlertProps) => {
  //   const [isOpen, setIsOpen] = useState(isActive);

  if (!isActive) {
    return null;
  }

  return (
    <div
      className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded relative mb-4 "
      role="alert"
    >
      <strong className="font-bold">Alerta!</strong>
      <span className="block sm:inline"> Preencha todos os campos!</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <button onClick={() => closeFunction()}>Close</button>
          <path d="M14.348 14.849l-1.414 1.414L10 11.414l-2.93 2.93-1.414-1.414L8.586 10 5.656 7.071l1.414-1.414L10 8.586l2.93-2.93 1.414 1.414L11.414 10l2.93 2.929z" />
        </svg>
      </span>
    </div>
  );
};

export default Alert;
