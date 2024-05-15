import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import Input from "components/Input/Input";
import { useState } from "react";

import s from "./style.module.css";
import { AuthLayout } from "layouts/AuthLayout/AuthLayout";
import AuthAPI from "api/auth";
import { setUser } from "store/auth/auth-slice";
import { useDispatch } from "react-redux";
import { toast } from "utils/sweet-alert";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      return toast("error", "Passwords are not the same..!");
    }

    try {
      const user = await AuthAPI.signup(email, password);
      dispatch(setUser(user));
      await toast("success", "Sign up succeed..!");
      navigate("/");
    } catch (error) {
      toast("error", "Sign up failed..!");
    }
  };

  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signin <br />
        to access your team notes
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          placeholder={"Password"}
          type="password"
          onTextChange={setPassword}
        />
        <Input
          placeholder={"Password (repeat)"}
          type="password"
          onTextChange={setPasswordRepeat}
        />
        <ButtonPrimary type="submit" className={s.button}>
          Sign in!
        </ButtonPrimary>
        <span>
          Already have an account yet ? <Link to={"/sign-in"}>Signin</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
