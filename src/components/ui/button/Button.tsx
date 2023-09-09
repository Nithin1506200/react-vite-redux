/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
// builder method
interface IButtonProps {
  isLoading?: boolean;
  children?: React.ReactElement | string | number;
}
type ButtonPropsKeys = Array<keyof IButtonProps>;
const buttonPropsKeys: ButtonPropsKeys = ['children', 'isLoading'];

type ReactButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
//----------------------BUILDER METHOD -----------------------------
function Button(props: IButtonProps & ReactButton) {
  const filteredProps: ReactButton = Object.fromEntries(
    Object.entries(props).filter(([key, _]) => buttonPropsKeys.findIndex((k) => k == key) == -1)
  );
  return (
    <button {...filteredProps}>
      {props.isLoading && 'loadingImg'}
      {props.children}
    </button>
  );
}
//------------------- FACTORY METHOD --------------------------------
function Small(props: IButtonProps & ReactButton) {
  return <Button {...props} style={{ width: '20px', ...props.style }} />;
}
function Big(props: IButtonProps & ReactButton) {
  return <Button {...props} style={{ width: '40px', ...props.style }} />;
}

// factory method
Button.Small = Small;
Button.Big = Big;
export default Button;
