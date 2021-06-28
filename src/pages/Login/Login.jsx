import React from "react";
import { Button, Section } from "../../components";

const Login = () => (
  <Section>
    <h1 className="title">Prisijungti</h1>

    <form>
      <div className="field">
        <label className="label">El. paštas</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="petras@gmail.com"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Slaptažodis</label>
        <div className="control">
          <input className="input" type="password" placeholder="slaptažodis" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <Button color="primary" type="submit">
            Prisijungti
          </Button>
        </div>
      </div>
    </form>
  </Section>
);

export default Login;
