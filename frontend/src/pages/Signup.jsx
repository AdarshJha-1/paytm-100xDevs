import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Input from "../components/Input";
import Button from "../components/Button";
import Waring from "../components/Waring";

const Signup = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-300">
      <div className="w-[380px] h-[600px] bg-white flex flex-col p-7 rounded-xl">
        <Heading heading={"Sign up"} />
        <Subheading text={"Enter your information to create an account"} />
        <Input inputFor={"First Name"} placeholder={"John"} />
        <Input inputFor={"Last Name"} placeholder={"Doe"} />
        <Input inputFor={"Email"} placeholder={"johndoe@example.com"} />
        <Input type={"password"} inputFor={"Password"} />
        <Button text={"Sign Up"} />
        <Waring text={"Already have an account?"} goto={'/signin'} link={"Login"}/>
      </div>
    </div>
  );
};

export default Signup;
