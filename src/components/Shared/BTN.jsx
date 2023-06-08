import { Button } from "@material-tailwind/react";

const BTN = ({ children, type = "button", cclass }) => {
	return (
		<Button
      type={type}
      className={`bg-orange-400 text-gray-800 dark:bg-orange-700 dark:text-gray-100 ${cclass}`}>
			{children}
		</Button>
	);
};

export default BTN ;
