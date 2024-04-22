import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../src/App';

export default function Footer() {
  const Theme = useContext(ThemeContext);
  return (
      <div className={`footer ${Theme && "dark-footer"}`}>
        <p>© 2024 All Rights Reserved by elite-themes24.</p>
      </div>
  )
}
