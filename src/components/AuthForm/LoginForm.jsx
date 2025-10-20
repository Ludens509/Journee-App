import { Link, useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext/index.jsx";

// import Loader from "../Loader";

function LoginForm({ setNewUser }) {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //   const [login, { isLoading }] = useLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    //form submission logic here
    try {
      await login(formData);

      navigate("/posts");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      console.error(err?.message || err);
    }
  };
//Handle input changes and update form data state
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //Allow user to switch to register form
  const handleClick = () => {
    setNewUser((setNewUser) => !setNewUser);
  };

  return (
    <>
      <header className="text-2xl font-semibold pb-2.5  border-b">
        Log in
      </header>

      <form className="my-5" onSubmit={submitHandler}>
        <div className=" field flex flex-col mb-2.5 relative">
          <label className="mb-0.5" htmlFor="email-input">
            Email address
          </label>
          <input
            className="h-10 w-full text-base  rounded-md border-solid border border-violet px-2 outline-none"
            type="email"
            name="email"
            id="email-input"
            placeholder="Email address"
            value={formData.email}
            onChange={handleOnChange}
            required={true}
          />
        </div>
        {/* PASSWORD FIELD */}
        <div className=" field flex flex-col mb-2.5 relative">
          <label className="mb-0.5" htmlFor="password-input">
            Password
          </label>
          <input
            className="h-10 w-full text-base  rounded-md border-solid border border-violet px-2 outline-none"
            type="password"
            id="password-input"
            name="password"
            placeholder="Password here"
            value={formData.password}
            onChange={handleOnChange}
            required={true}
            minLength={6}
          />
        </div>
        <div className="flex justify-end mb-2.5 text-right">
          <Link className="text-violet underline" to="/">
            Forgot password?
          </Link>
        </div>
        {/* SUBMIT BUTTON */}
        <div className="field ">
          <button
            className="active:scale-95 active:duration-75 
                  hover:scale-[1.01] ease-in-out transition-all w-full my-3 h-11 border-none 
                  rounded-md text-base text-white text-center justify-center bg-[#d6bae4] cursor-pointer"
            type="submit"
          >
            {/* {isLoading ? (
                <>
                  <div aria-busy={isLoading}>
                    <Loader />
                  </div>
                </>
              ) : (
                <>Log in..</>
              )} */}
            Log in
          </button>
        </div>
      </form>
      <div className="text-center text-base mb-4" onClick={handleClick}>
        Not yet signed up?
        <Link className="text-blue-500" to="/auth">
          Register now
        </Link>
      </div>
    </>
  );
}

export default LoginForm;
