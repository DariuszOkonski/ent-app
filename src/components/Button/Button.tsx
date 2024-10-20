import styles from './Button.module.css';

interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  onClickCallback: () => void;
}

const Button = ({ children, onClickCallback, color = 'primary' }: Props) => {
  return (
    <button
      className={[styles.btn, styles.btnPrimary].join(' ')}
      onClick={onClickCallback}
    >
      {children}
    </button>
  );
};

export default Button;
