import React, { useEffect, useState } from "react";
import SawoLogin from "sawo-react";
import { AuthContext } from "./App";
export default function Login() {
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    fname: "",
    lname: "",
    isSubmitting: false,
    errorMessage: null,
  };
  const [data, setData] = React.useState(initialState);
  function sawoLoginCallback(payload) {
    setData({
      ...data,
      fname: payload.customFieldInputValues["First Name"],
      lname: payload.customFieldInputValues["Last Name"],
      isSubmitting: true,
      errorMessage: null,
    });
    dispatch({
      type: "LOGIN",
      payload: payload,
    });
    console.log(payload);
    // setPayload(payload);
    // setUserId(payload.user_id);
    // setToken(payload.verification_token);
    // setIsAuthenticated(true);
    // setPayload(payload);
  }
  console.log(process.env);
  console.log(process.env.REACT_APP_SAWO_API_KEY);
  const sawoConfig = {
    onSuccess: sawoLoginCallback,
    // should be same as the id of the container created on 3rd step
    // can be one of 'email' or 'phone_number_sms' or 'both_email_phone'
    identifierType: "email",
    // Add the API key copied from 5th step
    apiKey: process.env.REACT_APP_SAWO_API_KEY,
    // `${process.env.API_KEY}`
    // Add a callback here to handle the payload sent by sdk
    containerHeight: "430px",
    containerWidth: "200px",
  };

  return <SawoLogin config={sawoConfig} />;
}
