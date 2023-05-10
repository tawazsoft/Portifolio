import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import FacebookLink from "../social/FacebookLink";
import PhoneLink from "../social/PhoneLink";




// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(true);

    emailjs
      .sendForm(
        "service_afd6ydr",
        "template_u7tlugd",
        form.current,
        "hY82wYkSRgOBh-7BW"
      )
      .then(
        (result) => {
          console.log(result.text);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <h2>Got a job, or just wanna talk?</h2>
      <h3>Give me a ring!</h3>

      <form ref={form} onSubmit={sendEmail}>
        <div className="f1">
          <label> First Name</label>
          <input type="text" name="user_name" placeholder="e.g John" />
          <label>Message</label>
          <textarea name="message" placeholder="Type something!…" />
        </div>
        <div className="f2">
          <label>Last Name</label>
          <input type="text" name="user_name" placeholder="e.g Doe" />

          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="user@example.com"
          />
          <input type="submit" value="Send" />
        </div>
      </form>

      <div className="social">
        <FacebookLink/>
        <PhoneLink/>
      </div>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;
  text-align: center;
  h2{
    color:#DE0033;
    font-size:46px;
    font-weight:bold;
    font-family:'pbold';
  }
  h3{
    font-size: 32px;
    font-family: 'pbold';
    position: relative;
    margin: 50px 0;
}

h3::before{
     content: "";
    width: 160px;
    height: 4px;
    background: transparent linear-gradient(91deg, #FF0000 0%, #FF0BB4 100%) 0% 0% no-repeat padding-box;
    border-radius: 2px;
    position: absolute;
   left: 44%;
    bottom: -20px;
}

  form {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    text-align: left;
    margin:100px auto;
    .f1,
    .f2 {
      display: flex;
      flex-direction: column;
      margin: 0 33px;
    }



    input {
      width: 488px;
      height: 55px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #000000;
      background-color: #000000;
      color:white; 

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      width: 488px;
      height: 249px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: none;
      background-color: #000000;
      color:white;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
    margin-top: 14rem;
    cursor: pointer;
    background: transparent linear-gradient(91deg, #FF0000 0%, #FF0BB4 100%) 0% 0% no-repeat padding-box;
    color: white;
    border: none;
    width: 174px;
    height: 55px;
}
    }
  }
`;


