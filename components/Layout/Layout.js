import Head from "../Head";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Layout.module.css';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function Layout({ children, title = 'منصة كورونا بالعربي' }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    );

    setTheme(localStorage.getItem('theme'));
  }, []);

  const switchTheme = () => {
    if (theme === 'light') {
      saveTheme('dark');
    } else {
      saveTheme('light');
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };
  function refreshPage() {
    //window.location.reload(false);
    window.parent.location = window.parent.location.href = '/';
  }
  return (
    <div className={styles.container}>
      <Head/>
      <header className={styles.header}>
        <button
          aria-label="change color theme"
          className={styles.theme__swicher}
          onClick={switchTheme}
        >
          <Brightness4Icon />
        </button>
        <Link href="/">
          <a  onClick={refreshPage}>
            <div className={styles.title}>
              {' '}
              منصة كوفيــد-19 بالعربي
              <img src="/virus.svg" alt="logo" width="60" height="100" />
            </div>
          </a>
        </Link>
      </header>
      <main className={styles.main}> {children} </main>
      <footer className={styles.footer}>
        <a
          href="https://twitter.com/a7medjadan"
          rel="noopener noreferrer"
          target="_blank"
        >
          Ahmed Ja'dan &copy;
        </a>{' '}
      </footer>
    </div>
  );
}

export default Layout;
