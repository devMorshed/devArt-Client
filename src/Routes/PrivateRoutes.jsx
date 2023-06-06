const PrivateRoutes = ({ children }) => {
	const user = true;
	if (user) {
		return children;
	} else {
		return <div>this is private</div>;
	}
};

export default PrivateRoutes;
