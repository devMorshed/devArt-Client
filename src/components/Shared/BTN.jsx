/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const BTN = ({ children, type = "button", cclass, disabled }) => {
  return (
    <Button
      disabled={disabled}
      type={type}
      className={`bg-orange-400 text-gray-800 dark:bg-orange-700 dark:text-gray-100 ${cclass}`}
    >
      {children}
    </Button>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default BTN;
