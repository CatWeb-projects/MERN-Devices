'use client'

import Link from 'next/link';
import { useFormik } from 'formik';

import './LoginForm.scss';
import { Button } from '../Button/Button';

export const LoginForm = () => {
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
    <form className='login--form' onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
       <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <div className='login--form--actions'>
        <Button>Login</Button>
        <Link href={'/register'}>Register</Link>
      </div>
    </form>
  </div>
  );
};