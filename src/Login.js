import React, { useEffect, useState, useContext } from "react";
import SawoLogin from "sawo-react";
import Sawo from "sawo";
import { useAuth0 } from "@auth0/auth0-react";
export default function Login() {
  const { loginWithRedirect } = useAuth0();
  function sawoLoginCallback(payload) {
    console.log(payload);
  }
  console.log(process.env.REACT_APP_SAWO_API_KEY);

  const sawoConfig = {
    onSuccess: sawoLoginCallback, //required
    //required must be one of: 'email', 'phone_number_sms', or 'both_email_phone'
    identifierType: "email",
    apiKey: process.env.REACT_APP_SAWO_API_KEY, //required get it from sawo dev.sawolabs.com,
    containerHeight: "430px",
    containerWidth: "200px", //required the login container height, default is 300px
  };
  return <button onClick={loginWithRedirect}></button>;
}
// <div id="sawo-container" style={{ height: "430px", width: "200px" }}></div>
