import React, { useState } from "react";
import { Button, Section } from "../../components";

import { createUser } from "../../services/firebase/auth.controller";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Section>
      <h1 className="title">Registracija</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(await createUser(email, password));
        }}
      >
        <div className="field">
          <label className="label">El. paštas</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="petras@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Slaptažodis</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="slaptažodis"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <Button color="primary" type="submit" handleClick={() => {}}>
              Registruotis
            </Button>
          </div>
        </div>
      </form>
    </Section>
  );
};

export default Register;
