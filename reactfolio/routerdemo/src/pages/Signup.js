import Template from "../components/Template";
import signupImg from "../assets/signup.png";
function Signup({ setLoggedIn }) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setLoggedIn={setLoggedIn}
    ></Template>
  );
}
export default Signup;
