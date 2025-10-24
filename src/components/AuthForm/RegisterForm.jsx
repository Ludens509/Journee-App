import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Loader from "../Loader";
import { useAuth } from "../../context/authContext/index.jsx";

function RegisterForm({ setNewUser }) {
  const { signUp } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();

  //   const [register, { isLoading }] = useRegisterMutation();

  //   useEffect(() => {
  //     if (userInfo) {
  //       navigate('/');
  //     }
  //   }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    //form submission logic here
    try {
      if (formData.password !== formData.password2)
        toast.error("Passwords do not  match");

      await signUp(formData);

      navigate("/posts");
    } catch (err) {
      toast.error(err.message || err.error);
      console.error(err.message);
    }
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setNewUser(false);
  };

  return (
    <>
      <header className="text-2xl font-semibold pb-2.5  border-b">
        Register Here...
      </header>
      <form className="my-5" onSubmit={submitHandler}>
        <div className=" field flex flex-col mb-2.5 relative last:ml-2 sm:last:ml-0">
          <label className="mb-0.5" htmlFor="fullname-input">
            Username
          </label>
          <input
            className="h-10 w-full text-base  rounded-md border-solid border border-violet px-2 outline-none"
            type="text"
            id="fullname-input"
            name="username"
            placeholder="Username here"
            value={formData.username}
            onChange={handleOnChange}
            required={true}
          />
        </div>
        {/* USERMAIL FIEILD */}
        <div className=" field flex flex-col mb-2.5 relative">
          <label className="mb-0.5" htmlFor="email-input">
            Email adress
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
            name="password"
            id="password-input"
            placeholder="Password here"
            value={formData.password}
            onChange={handleOnChange}
            required={true}
            minLength="6"
          />
        </div>
        {/* COMFIRM PASSWORD FIELD */}
        <div className=" field flex flex-col mb-2.5 relative">
          <label className="mb-0.5" htmlFor="comfirmpass-input">
            Comfirm Password
          </label>
          <input
            className="h-10 w-full text-base  rounded-md border-solid border border-violet px-2 outline-none"
            type="password"
            name="password2"
            id="comfirmpass-input"
            placeholder="Comfirm Password here"
            value={formData.password2}
            onChange={handleOnChange}
            required={true}
            minLength={6}
          />
        </div>
        {/* SUBMIT BUTTON */}
        <div className="field ">
          <button
            className="active:scale-95 active:duration-75 hover:scale-[1.01] ease-in-out
                 transition-all w-full my-3 h-11 border-none rounded-md text-base text-white text-center 
                 justify-center bg-[#d6bae4] cursor-pointer"
            type="submit"
          >
            {/* {isLoading ? (
                <>
                  <div aria-busy={isLoading}>
                    <Loader />
                  </div>
                </>
              ) : (
                <>Register now</>
              )} */}
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center text-base " onClick={handleClick}>
        Already signed up?
        <Link className="text-blue-500 underline" to="/auth">
          Login now
        </Link>
      </div>
    </>
  );
}

export default RegisterForm;
