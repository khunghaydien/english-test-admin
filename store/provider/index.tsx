"use client";
import { Provider as Providers } from "react-redux";
import { ThemeProvider } from 'next-themes'
import { store } from "..";
const Provider = ({ children }: { children: React.ReactNode }) => {
  return <Providers store={store}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  </Providers>;
};
export default Provider;
