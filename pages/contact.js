import Root from "../components/body/root";

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

const Contact = () => {
  return (
    <Root title="Contact">
      <div className="section flex direction-column align-center justify-center">
        <h1 className="title banner white">let's talk</h1>
        <div className="form flex direction-column align-center">
          <div className="double flex full-width">
            <Input name="Full Name" />
            <Input name="Email Address" />
          </div>
          <Input name="Timeline" />
          <div className="triple flex full-width">
            <Card icon="rocket" name="Technology" />
            <Card icon="egg" name="Chickens" />
            <Card icon="heartbeat" name="Healthcare" />
          </div>
          <Input type="textarea" name="More Information" />
          <button className="default-size title">Submit</button>
        </div>
      </div>
    </Root>
  );
};

export default Contact;
