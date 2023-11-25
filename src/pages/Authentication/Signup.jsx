import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hook/provider/AuthProvider";
const Signup = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    createUser(email, password)
    .then(res => {
        const logged = res.user;
        console.log(logged)

        updateUserProfile(name, photoUrl)
        .then(data => {
            console.log('update user',data)
        })
    })

    console.log(name, email, password, photoUrl);
  };

  return (
    <div className="flex w-11/12 mx-auto h-screen justify-center items-center">
      <form
        onSubmit={handleSignUp}
        className="flex w-full  md:w-3/4 lg:w-3/4 xl:w-1/3 border-2 flex-col gap-4 p-10 shadow-lg"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Name" />
          </div>
          <TextInput
            name="name"
            id="name1"
            type="text"
            placeholder="name"
            required
          />
        </div>

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

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your photo URL" />
          </div>
          <TextInput
            name="photoUrl"
            id="photo1"
            type="text"
            placeholder="photo url"
            required
          />
        </div>

        <Button type="submit">create an account</Button>

        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300 mt-1">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="text-cyan-700 hover:underline dark:text-cyan-500"
          >
            log In
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Signup;
