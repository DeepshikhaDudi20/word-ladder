import "../../styles/Button.scss";

const Button = ({ onClick, disabled, label }) => {
  return (
    <button
      className={`button${disabled ? " button--disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
