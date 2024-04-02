type IErrorMessage = {
  errorMessage: string;
};
const ErrorMessage = ({ errorMessage }: IErrorMessage) => {
  return (
    <div className="input__error text-red-500 text-[12px]">{errorMessage}</div>
  );
};
export default ErrorMessage;
