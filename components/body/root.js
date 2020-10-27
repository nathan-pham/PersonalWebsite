import Seo from "./seo";
import Header from "../header/header";

const Root = (props) => {
  return (
    <>
      <Seo title={props.title} description={props.description} />
      <Header></Header>
      <div
        id={"root-" + (props.title || "Home").toLowerCase()}
        className="root"
      >
        {props.children}
      </div>
    </>
  );
};

export default Root;
