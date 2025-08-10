import { Children, createContext, useState } from 'react';

type themeType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<themeType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export default ThemeContext;
