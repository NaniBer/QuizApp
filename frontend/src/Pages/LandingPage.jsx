import { useUser } from "@clerk/clerk-react";
const LandingPage = () => {
  const { user, isLoading } = useUser();
  console.log(user, isLoading);
  return (
    <div>
      <div>{user && <h1>Welcome, {user.firstName}</h1>}</div>
      <p>The main page is under construction</p>
    </div>
  );
};
export default LandingPage;
