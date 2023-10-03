function Button({
  text,
  color,
  bootstrap,
  onclickHandler,
  type,
  link,
  width,
  height,
}) {
  return (
    <button
      className={bootstrap}
      style={{ backgroundColor: color, width: width }}
      type={type}
      onClick={onclickHandler}
    >
      {text}
    </button>
  );
}

export default Button;
