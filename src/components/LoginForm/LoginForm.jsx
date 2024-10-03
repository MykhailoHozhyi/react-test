import { useId, useState } from 'react';

export default function LoginForm({ onLogin }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const { login, password } = form.elements;

    onLogin({
      login: login.value,
      password: password.value,
    });

    setValues({
      login: '',
      password: '',
    });
  }

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const loginId = useId();
  const passwordId = useId();
  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
        id={loginId}
      />

      <label htmlFor={passwordId}>Password</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        id={passwordId}
      />
      <button type="submit">Log in</button>
    </form>
  );
}
