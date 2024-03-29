"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@chakra-ui/react"
import { useTheme } from '@/store/store';
import { Icon } from "../Icon/Icon"

import './Topbar.scss';

export const Topbar = () => {
  const pathname = usePathname();
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
  
  return (
    <div className="topbar">
      <div className="topbar--mode">
        <Button onClick={toggleTheme}>
          <Icon type={`${theme === 'dark' ? 'light-mode' : 'dark-mode'}`} />
        </Button>
      </div>
      <div className="topbar--lang">
        <a href="/ro" className={pathname === '/ro' ? 'lang--active' : ''}>ro</a>
        <a href="/en" className={pathname === '/en' ? 'lang--active' : ''}>en</a>
        <a href="/ru" className={pathname === '/ru' ? 'lang--active' : ''}>ru</a>
      </div>
    </div>
  )
}