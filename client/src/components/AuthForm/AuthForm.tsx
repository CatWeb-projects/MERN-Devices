'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useFormik } from 'formik';
import { useUser } from '@/store/store';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Separator } from '../Separator/Separator';
import { saveTokenStorage } from '@/services/auth-token.service';

import './AuthForm.scss';

export const AuthForm = () => {
  const [emailInputValue, setEmailInputValue] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [
    profile,
    login,
    registration,
    error
  ] = useUser((state) => [
    state.profile,
    state.login,
    state.registration,
    state.error
  ]);
  const t = useTranslations('Auth');
  const locale = useLocale();
  const { push } = useRouter();
  const pathname = usePathname()
  const isRegistrationPage = pathname?.includes('registration');
  const isLoginPage = pathname?.includes('login');
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const buttonEnabled = !emailValidation.test(emailInputValue);

  const formTitle = () => {
    if (isRegistrationPage) {
      return t('create_account');
    } else {
      return t('login');
    }
  }

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      role: 'user'
    },
    onSubmit: (values: any) => {
      console.log(values, 'form values');
      if (isRegistrationPage) {
        registration(values)
      } else {
        login(values.email, values.password);
      }
    },
  });

  useEffect(() => {
    if (profile?.refreshToken) {
      saveTokenStorage(profile.refreshToken);
      push(`/${locale}`);
    }
  }, [profile?.refreshToken]);

  return (
    <div className="login">
      <div className="login--description">
        {/* <Logo logo={logo} hide /> */}
        <Link href={`/${locale}`}>
          <Icon type="logo" width="60" height="60" />
        </Link>
        <h1>{formTitle()}</h1>
      </div>
      <form className='login--form' onSubmit={formik.handleSubmit}>
        {isRegistrationPage && (
          <>
            <div className="login--input-wrapper">
              <span>
                <Icon type="write" width="24" height="24" />
              </span>

              <input
                id="first_name"
                name="first_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.first_name}
                placeholder={t('first_name')}
                autoComplete="off"
              />
            </div>

            <div className="login--input-wrapper">
              <span>
                <Icon type="write" width="24" height="24" />
              </span>

              <input
                id="last_name"
                name="last_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.last_name}
                placeholder={t('last_name')}
                autoComplete="off"
              />
            </div>
          </>
        )}

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
            placeholder={t('email')}
            autoComplete="off"
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
            placeholder={t('password')}
            onChange={formik.handleChange}
            value={formik.values.password}
            autoComplete="off"
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
          {isLoginPage && (
            <Button size="auto" className='forgot-password'>Forgot password?</Button>
          )}
          {error && (
            <div className="error-message">{error}</div>
          )}
          <Button generalType="submit" size="auth" className='login--btn'>
            {isLoginPage ? t('login') : t('register')}
          </Button>
        </div>
        <Separator />
        <div className="login--already">
          <span className="login--already--title">
            {isRegistrationPage ? t('have_account') : t('no_account')}
          </span>
          {isRegistrationPage ? (
            <Link href={`/${locale}/auth/login`}>{t('login')}</Link>
          ) : (
            <Link href={`/${locale}/auth/registration`}>{t('register')}</Link>
          )}
        </div>
      </form>
    </div>
  );
};