"use client";

import { useInput } from "@/hooks/useInput";
import { isEmail, isNotEmpty, isPasswordValid } from "@/utils/helper";
import Input from "../Input";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    errorMessage: emailErrorMessage,
    setDidEdit: emailEdit,
  } = useInput(
    "",
    (value) => isEmail(value) && isNotEmpty(value),
    "Please enter a valid email address."
  );

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
    errorMessage: passwordErrorMessage,
    setDidEdit: passEdit,
  } = useInput(
    "",
    (value) => isPasswordValid(value),
    "Password must contain at least 8 characters, including a lowercase letter, an uppercase letter, a number, and a special character."
  );
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailEdit(true);
    passEdit(true);

    if (
      emailValue.trim() === "" ||
      passwordValue.trim() === "" ||
      emailErrorMessage ||
      passwordErrorMessage
    ) {
      return;
    }
    alert(emailValue);
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#ffffff] p-10 w-[500px] mx-auto flex flex-col gap-y-4 rounded-md shadow-2xl"
    >
      <Input
        label="Email"
        id="email"
        type="email"
        name="email"
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        value={emailValue}
        error={emailHasError}
        errorMessage={emailErrorMessage}
      />

      <Input
        label="Password"
        id="password"
        type="password"
        name="password"
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        value={passwordValue}
        error={passwordHasError}
        errorMessage={passwordErrorMessage}
      />

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 hover:text-white rounded-md px-6 py-2 w-fit self-end"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
