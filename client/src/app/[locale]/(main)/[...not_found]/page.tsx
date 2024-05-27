'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

import './not-found.scss';

const NotFound = () => {
  const locale = useLocale();
  return (
    <div className="not-found">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href={`/${locale}`}>Return Home</Link>
    </div>
  );
};

export default NotFound;
