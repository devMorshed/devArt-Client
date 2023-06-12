import React from "react";

const SmallBTN = ({ text, onClick }) => {
	return <button onClick={onClick}  className="px-2 py-1 bg-gray-400 rounded">{text}</button>;
};

export default SmallBTN;
