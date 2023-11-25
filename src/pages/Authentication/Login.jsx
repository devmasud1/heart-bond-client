import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../hook/provider/AuthProvider";
import toast from "react-hot-toast";



const Login = () => {
  const { googleSignIn, userLogIn } = useContext(AuthContext);
  const handleLogIn = (e) => {
    const loadingToast = toast.loading("Logging...");
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogIn(email, password)
      .then(() => {
        toast.success("Login successful", { id: loadingToast });
        form.reset();
      })
      .catch((err) => {
        toast.dismiss(loadingToast);
        toast.error("something wrong!", err.message);
        form.reset();
      });
  };

  const handleGoogleSignIn = () => {
    const loadingToast = toast.loading("Logging...");
    googleSignIn()
      .then(() => {
        toast.success("Login successful", { id: loadingToast });
      })
      .catch((err) => {
        toast.dismiss(loadingToast);
        toast.error("something wrong!", err.message);
      });
  };
  return (
    <div className="flex w-11/12 mx-auto h-[76vh] justify-center items-center">
      <form
        onSubmit={handleLogIn}
        className="flex w-full  md:w-3/4 lg:w-3/4 xl:w-1/3 border-2 flex-col gap-4 p-10 shadow-lg"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            name="email"
            id="email1"
            type="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            name="password"
            id="password1"
            type="password"
            placeholder=" password"
            required
          />
        </div>

        <Button type="submit">login</Button>

        <Button color="blue" onClick={handleGoogleSignIn}>
          {" "}
          <FaGooglePlusG className="text-2xl font-semibold" />{" "}
        </Button>

        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300 mt-1">
          Not registered?&nbsp;
          <Link
            to="/signup"
            className="text-cyan-700 hover:underline dark:text-cyan-500"
          >
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
