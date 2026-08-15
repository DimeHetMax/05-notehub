interface ErrorComponentProps{
 children: React.ReactNode;
}
const ErrorComponent = ({children}:ErrorComponentProps) => {
  return <div>{children}</div>;
};

export default ErrorComponent;
