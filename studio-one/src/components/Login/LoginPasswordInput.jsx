import React, { useContext } from 'react';
import validatePassword from '../../services/validatePassword';
import AppContext from '../../context/AppContext';

export default function LoginPasswordInput() {
  const { userData, setUserData, setPasswordValid } = useContext(AppContext);
  return (
    <label htmlFor="senha" className="label">
      <input
        type="password"
        id="senha"
        className="input"
		placeholder="Senha"
        onChange={(event) => {
          if (validatePassword(event.target.value)) {
            setPasswordValid(true);
            setUserData({ ...userData, password: event.target.value });
          }
        }}
      />
    </label>
  );
}
