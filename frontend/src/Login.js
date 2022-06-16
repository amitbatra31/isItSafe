import React, { useEffect } from "react";
import SawoLogin from "sawo-react";
export default function Login() {
  function sawoLoginCallback(payload) {
    console.log(payload);
  }

  const sawoConfig = {
    onSuccess: sawoLoginCallback,
    // should be same as the id of the container created on 3rd step
    // can be one of 'email' or 'phone_number_sms' or 'both_email_phone'
    identifierType: "email",
    // Add the API key copied from 5th step
    apiKey: "82b943f1-f38f-48ff-a66a-9ceea2d2eab5",
    // `${process.env.API_KEY}`
    // Add a callback here to handle the payload sent by sdk
    containerHeight: "430px",
    containerWidth: "200px",
  };

  return <SawoLogin config={sawoConfig} />;
}
