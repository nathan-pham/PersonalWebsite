import Root from "../components/body/root";
import { Input, Card } from "../components/root/contact";

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
            <Card icon="egg" name="Agriculture" />
            <Card icon="heartbeat" name="Healthcare" />
          </div>
          <Input type="textarea" name="More Information" />
          <button className="default-size title crayola">Submit</button>
        </div>
      </div>
    </Root>
  );
};

export default Contact;
