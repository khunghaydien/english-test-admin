type IModuleLayout = {
  children: React.ReactNode;
};
const ModuleLayout = ({ children }: IModuleLayout) => {
  return <div>{children}</div>;
};
export default ModuleLayout;
