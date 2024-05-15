import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";
import Input from "components/Input/Input";
import { useState } from "react";

import s from "./style.module.css";
import { AuthLayout } from "layouts/AuthLayout/AuthLayout";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log("submited ", email, password);
  };
  console.log(email, password);
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
        <ButtonPrimary type="submit" className={s.button}>
          Sign in!
        </ButtonPrimary>
        <span>
          Don't have an account yet ? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}