import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUs({ getData }) {
  const [user, setUser] = useState([]);
  const [state, setState] = useState(false);
  const [password, setPassword] = useState("");
  const nameRef = useRef();

  const validation = () => {
    const nameInput = nameRef.current.value;
    console.log(password);

    user.forEach((users) => {
      if (users.name === nameInput) {
        console.log(users.password);
        setPassword(users.password);
        setState(true);
      }
    });
    console.log(password);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(password);

    emailjs
      .sendForm(
        "25degree",
        "template_nbmjn4c",
        event.target,
        "user_CZM7ZYtWbXQCDjrZCYOUr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setState(false);
  };

  console.log(user);
  console.log(password);

  useEffect(() => {
    getData //
      .getUserInfo()
      .then((datas) => setUser(datas));
  }, [getData]);

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input ref={nameRef} type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <input type="hidden" value={password} name="text" />
      {state === false && <button onClick={validation}>check</button>}
      {state === true && <input type="submit" value="Send" />}
    </form>
  );
}
