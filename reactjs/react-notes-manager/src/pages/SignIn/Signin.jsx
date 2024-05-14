import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";
import Input from "components/Input/Input";

import s from "./style.module.css";
import { AuthLayout } from "layouts/AuthLayout/AuthLayout";

export default function SignIn() {
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Sign in <br />
        to access your team notes
      </h2>
      <form className={s.formGroup}>
        <Input
          placeholder={"Email"}
          onTextChange={(value) => {
            console.log("email");
          }}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          onTextChange={(value) => {
            console.log("Password");
          }}
        />
        <ButtonPrimary className={s.button}>Sign in!</ButtonPrimary>
        <span>
          Don't have an account yet ? <Link to="/sign-up">Sign up</Link>
        </span>
      </form>
    </div>
  );

  return <AuthLayout>{form}</AuthLayout>;
}
