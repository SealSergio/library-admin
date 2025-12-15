import { FC, FormEventHandler, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../app/User';
import { queryClient } from '../../app/queryClient';
import "./Login.scss";

export const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useMutation(
    {
      mutationFn: () => login(username, password),
      onSuccess() {
        queryClient.invalidateQueries({queryKey: ["users", "me"]});
      },
    },
    queryClient
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    loginMutation.mutate();
  };

  return (
    <div className="login-window">
      <div className="login-window__content">
        <h1 className="login-window__title">Войти</h1>
        <form className="login-window__form form" onSubmit={handleSubmit}>
          <label className="form__label login-window__label">
            <span className="form__label__title"></span>
            <input
              className="form__input login-window__input"
              type="text"
              placeholder="Введите логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="form__label login-window__label">
            <span className="form__label__title"></span>
            <input
              className="form__input login-window__input"
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {loginMutation.error && (
            <p className="form__error" style={{ color: 'red' }}>
              {loginMutation.error.message}
            </p>
          )}
          <button className="form__btn form__btn--submit" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};
