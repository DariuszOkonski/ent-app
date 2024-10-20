interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  onClickCallback: () => void;
}

const Button = ({ children, onClickCallback, color = 'primary' }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClickCallback}>
      {children}
    </button>
  );
};

export default Button;
