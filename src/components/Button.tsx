interface Props {
  type: string;
  text: string;
}

const Button = ({ type, text }: Props) => {
  return <button className={type}>{text}</button>;
};

export default Button;
