import React from "react";

const SmallBTN = ({ text, onClick, disabled }) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className="px-2 text-xs py-1 bg-orange-300 font-medium disabled:bg-gray-200 disabled:text-gray-500 rounded">
			{text}
		</button>
	);
};

export default SmallBTN;
