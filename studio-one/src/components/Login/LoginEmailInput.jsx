import React, { useContext } from 'react';
import validateEmail from '../../services/validateEmail';
import AppContext from '../../context/AppContext';

export default function LoginEmailInput() {
  const { userData, setUserData, setEmailValid } = useContext(AppContext);
  return (
    <label htmlFor="email" className="label">
      <input
        id="email"
        className="input"
		placeholder="E-mail"
        onChange={(event) => {
          if (validateEmail(event.target.value)) {
            setEmailValid(true);
            setUserData({ ...userData, email: event.target.value });
          }
        }}
      />
    </label>
  );
}
