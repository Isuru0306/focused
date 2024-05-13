import { useState } from "react";
import { PasswordGeneratorHeader } from "../passwordGeneratorHeader/PasswordGeneratorHeader";
import { PasswordGeneratorBody } from "../passwordGeneratorBody/PasswordGeneratorBody";
import { PasswordGeneratorFooter } from "../passwordGeneratorFooter/PasswordGeneratorFooter";

import css from "./style.module.css";

export function PasswordGeneratorCard() {
  const [password, SetPassword] = useState("Amazing Password");
  return (
    <div className={css.root}>
      <div className={css.main}>
        <PasswordGeneratorHeader />
        <PasswordGeneratorBody onSubmit={SetPassword} />
      </div>
      <PasswordGeneratorFooter password={password} />
    </div>
  );
}
