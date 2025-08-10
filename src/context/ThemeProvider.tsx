import { PropsWithChildren, useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
