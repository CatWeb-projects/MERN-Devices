"use client";

import { useEffect } from "react";
import { Button } from "@chakra-ui/react"
import { useTheme } from '@/store/store';
import { Icon } from "../Icon/Icon"

import './Topbar.scss';

export const Topbar = () => {
  const [
    theme,
    toggleTheme
  ] = useTheme((state) => [
    state.theme,
    state.toggleTheme
  ])

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('night');
    }
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  console.log(theme, 'theme')
  
  return (
    <div className="topbar">
      <div className="topbar--mode">
        <Button onClick={toggleTheme}>
          <Icon type={`${theme === 'dark' ? 'light-mode' : 'dark-mode'}`} />
        </Button>
      </div>
      <div className="topbar--lang">
        <a href="/" className="lang--active">ro</a>
        <a href="/eng">eng</a>
        <a href="/ru">ru</a>
      </div>
    </div>
  )
}