"use client";
import { Provider as Providers } from "react-redux";
import { store } from "..";
const Provider = ({ children }: { children: React.ReactNode }) => {
  return <Providers store={store}>{children}</Providers>;
};
export default Provider;
