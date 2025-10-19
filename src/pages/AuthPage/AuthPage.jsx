import RegisterForm from "../../components/AuthForm/RegisterForm";
import LoginForm from "../../components/AuthForm/LoginForm";
import { useState } from "react";

export default function AuthPage() {
  const [newUser, setNewUser] = useState(false);

  return (
    <>
     <section className="flex items-center justify-center min-h-screen bg-cuswhite px-2.5 font-sans">
        <div className="wrapper--card bg-white max-w-lg w-full rounded-2xl pt-7 pb-7 pr-6 pl-6 mt-16">
          {/* <header className="text-2xl font-semibold pb-2.5  border-b">Login in..</header> */}
           {newUser ? (
        <RegisterForm setNewUser={setNewUser} />
      ) : (
        <LoginForm setNewUser={setNewUser} />
      )}
        </div>
      </section>
    </>
  );
}

