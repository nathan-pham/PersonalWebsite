import Seo from "./seo";
import Header from "../header/header";

const Root = (props) => {
  let title = props.title ? props.title : "Home";
  return (
    <>
      <Seo title={title} description={props.description} />
      <Header></Header>
      <div id={"root-" + title.toLowerCase()} className="root">
        {props.children}
      </div>
    </>
  );
};

export default Root;
