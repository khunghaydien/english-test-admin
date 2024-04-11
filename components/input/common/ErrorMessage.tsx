type IErrorMessage = {
  errorMessage: string;
};
const ErrorMessage = ({ errorMessage }: IErrorMessage) => {
  return <div className="text-red-500 text-xs">{errorMessage}</div>;
};
export default ErrorMessage;
