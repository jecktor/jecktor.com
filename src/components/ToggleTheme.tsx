import { useState, useEffect } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';

const themes = ['light', 'dark'];

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) return undefined;

    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme'))
      return localStorage.getItem('theme');

    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      return 'dark';

    return 'light';
  });

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'light') root.classList.remove('dark');
    else root.classList.add('dark');
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-accent-300 dark:bg-neutral-700">
      {themes.map(t => {
        const checked = t === theme;

        return (
          <button
            key={t}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`${
              checked ? 'bg-neutral-100 text-neutral-700' : ''
            } cursor-pointer rounded-3xl p-2`}
          >
            {t === 'light' ? <IoSunny /> : <IoMoon />}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
};

export default ThemeToggle;
