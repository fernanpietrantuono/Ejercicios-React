import React, { useState, useEffect } from "react"
import { useUserForm } from "./../../Hooks/Custom.hooks";

export const UserFormRM = () => {
  const { form, handleChanges } = useUserForm();
  const [mail, setMail] = useState(true);
  const [pass, setPass] = useState(true);
  const [areEquals, setAreEquals] = useState(true);
  const [passwordConfirmation, setpasswordConfirmation] = useState();
  const [successfulForm, setsuccessfulForm] = useState(false);
  const validPass = () => {
    const { password } = form;
    if (password !== undefined) {
      setPass(false);
    }
    return pass
  }
  const validEmail = () => {
    const { email } = form;
    if (email !== undefined) {
      setMail(false);
    }
    return mail;
  }
  const handlePasswordConfirmation = (e) => {
    setpasswordConfirmation(e.target.value);
  };
  useEffect(() => {
    const { password } = form;
    setAreEquals(password === passwordConfirmation);
    validEmail();
    validPass();
  }, [passwordConfirmation, pass, mail]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setsuccessfulForm(true);
  }
  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Hey intruder, register!</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            {successfulForm ? (
              <div className="form-text list-group-item-success">
                You have registered successfully
              </div>
            ) : (<div className="invalid-feedback">
              Your count already exists
            </div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              name="email"
              onChange={handleChanges}
            />
            <div className="invalid-feedback">
              Please, enter a valid email address for shipping updates.
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="address"
              placeholder="Password"
              name="password"
              onChange={handleChanges}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repeat password
            </label>
            <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Repeat password"
              onChange={handlePasswordConfirmation}
            />
            {!areEquals && (
              <div className="form-text list-group-item-danger">
                The passwords are not equal
              </div>
            )}
          </div>
          <button
            disabled={!areEquals || pass || mail}
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}
