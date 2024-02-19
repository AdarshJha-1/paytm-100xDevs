import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Input from "../components/Input";
import Button from "../components/Button";
import Waring from "../components/Waring";


const Signin = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-300">
    <div className="w-[380px] h-[420px] bg-white flex flex-col p-7 rounded-xl">
      <Heading heading={"Sign In"} />
      <Subheading text={"Enter your credential to access your account"} />
      <Input inputFor={"Email"} placeholder={"johndoe@example.com"} />
      <Input type={"password"} inputFor={"Password"} />
      <Button text={"Sign Up"} />
      <Waring text={"Don't have an account?"} goto={'/signup'} link={"Sign Up"}/>
    </div>
  </div>
  )
}

export default Signin