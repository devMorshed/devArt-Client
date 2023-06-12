import BTN from "../../components/Shared/BTN";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user, logOut } = useAuth();

  console.log(user);
 
  
	return (
		<div>
			<div onClick={logOut}>
				<BTN>Log Out</BTN>
			</div>
		</div>
	);
};

export default Profile;
