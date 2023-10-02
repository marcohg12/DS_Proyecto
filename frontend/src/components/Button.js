function Button({ text, color, bootstrap, onclickHandler, type, link }) {
  return (
    <button
      className={bootstrap}
      style={{ backgroundColor: color }}
      type={type}
      onClick={onclickHandler}
    >
      {text}
    </button>
  );
}

export default Button;
