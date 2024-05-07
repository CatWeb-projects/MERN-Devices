'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useFormik } from 'formik';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Separator } from '../Separator/Separator';

import './LoginForm.scss';

export const LoginForm = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const locale = useLocale();
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const buttonEnabled = !emailValidation.test(emailInputValue);
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
  <div className="login">
    <div className="login--description">
      {/* <Logo logo={logo} hide /> */}
      <Link href={`/${locale}`}>
        <Icon type="logo" width="48" height="48" />
      </Link>
      <h1>Login</h1>
    </div>
    <form className='login--form' onSubmit={formik.handleSubmit}>
      <div className="login--input-wrapper">
        <span>
          <Icon type="email" width="24" height="24" />
        </span>

        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Please enter your email"
        />
      </div>

      <div className="login--input-wrapper">
        <span>
          <Icon type="password-lock" width="24" height="24" />
        </span>

        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button
          type="button"
          className="password-see-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Icon type={showPassword ? 'password-seen' : 'password-hide'} />
        </button>
      </div>
     
      <div className='login--form--actions'>
        <Button size="auto" className='forgot-password'>Forgot password?</Button>
        <Button generalType="submit" disabled={buttonEnabled} size="login" className='login--btn'>Login</Button>
      </div>
      <Separator />
      <div className="login--already">
        <span className="login--already--title">
          Don't have an account?
        </span>
        <Link href={`/${locale}/register`}>Sign up</Link>
      </div>
    </form>
  </div>
  );
};