const Input = ({ name, label, type }) => {
  let formName = name.split(" ").join("_").toLowerCase();
  return (
    <div className="full-width">
      <label className="title crayola" htmlFor={label || name}>
        {name.toUpperCase()}
      </label>
      {type == "textarea" ? (
        <textarea
          id={formName}
          name={formName}
          className="input default-size"
        ></textarea>
      ) : (
        <input
          id={formName}
          name={formName}
          type="text"
          autoComplete="off"
          className="input default-size"
        />
      )}
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="card">
      <label>
        <i className={`fas fa-${props.icon} crayola`}></i>
        <p className="default-size white">{props.name}</p>
        <input name="query" type="radio" />
      </label>
    </div>
  );
};

export { Input, Card };
