type IErrorMessage = {
  errorMessage: string;
};
const ErrorMessage = ({ errorMessage }: IErrorMessage) => {
  return (
    <div className="error-message-scroll text-red-500 text-xs absolute z-[-1]">{errorMessage}</div>
  );
};
export default ErrorMessage;
