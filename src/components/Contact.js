import React, { useState } from "react";
import Seo from "./seo/Seo";
import splash from "../images/splash.svg";
import axios from "axios";

function Contact() {
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [textError, setTextError] = useState({
    error: null,
    message: null,
    canSend: false
  });
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });

    if (ok) {
      form.reset();
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const form = e.target;
    console.log(textError);
    console.log(textError.message);

    if (textError.canSend === false) {
      console.log(textError.canSend);
      handleServerResponse(false, "Please add a message", form);
      return;
    }

    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/mjvpplor",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });

    setTextError({ ...textError, canSend: false });
  };

  function changeNameHandler(e) {
    const { value } = e.target;
    const hasLength = value.length > 3;

    if (!hasLength) {
      setError("Your name must have at least 4 characters");
    } else {
      setError(null);
    }
  }

  function changeEmailHandler(e) {
    const { value } = e.target;
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexp.test(value)) {
      setEmailError(null);
    } else {
      setEmailError("Your email must have a valid format");
    }
  }

  function changeTextHandler(e) {
    const { value } = e.target;
    const hasLength = value.length >= 40;

    if (!hasLength) {
      setTextError({
        error: "Your message must contain at least 40 characters",
        message: value,
        canSend: false
      });
    } else {
      setTextError({ error: null, message: null, canSend: true });
    }
  }

  return (
    <section className="form-page">
      <Seo title="Contact" />
      <div className="form-wrapper">
        <h3 className="contact-me">Contact me</h3>
        <form
          className="contact-form"
          onSubmit={submitHandler}
          action="https://formspree.io/f/mjvpplor"
          method="POST"
        >
          {serverState.status && (
            <p
              className={
                !serverState.status.ok ? "error-message" : "success-message"
              }
            >
              {serverState.status.msg}
            </p>
          )}
          <div className="form-section">
            <label htmlFor="name">Name</label>
            {error ? <div className="error-message">{error}</div> : null}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Lionel"
              className={`text-email-input ${!error ? "success" : "error"}`}
              onBlur={changeNameHandler}
              onFocus={() => setError(null)}
            />
          </div>
          <div className="form-section">
            <label htmlFor="email">Email</label>
            {emailError ? (
              <div className="error-message">{emailError}</div>
            ) : null}

            <input
              type="email"
              id="email"
              name="email"
              placeholder="lionelmessi@gmail.com"
              className={`text-email-input ${
                !emailError ? "success" : "error"
              }`}
              onBlur={changeEmailHandler}
              onFocus={() => setEmailError(null)}
            />
          </div>

          <div className="form-section">
            <label htmlFor="message">Message</label>
            <div className="error-message"> {textError.error}</div>
            <textarea
              name="message"
              id="message"
              cols="70"
              rows="10"
              onBlur={changeTextHandler}
              onFocus={() =>
                setTextError({ error: null, message: null, canSend: false })
              }
              className={`${!emailError ? "success" : "error"}`}
            ></textarea>
          </div>
          <button type="submit" disabled={Boolean(error)}>
            Send me a Message!
          </button>
        </form>
      </div>
      <img src={splash} alt="decoration" className="background2" />
    </section>
  );
}

export default Contact;
