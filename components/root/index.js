const Social = (props) => {
  return (
    <a href={props.href} className="social white">
      <i className={`fab fa-${props.icon}`}></i>
    </a>
  );
};

export { Social };
