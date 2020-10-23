import Seo from "./seo";

const Root = (props) => {
  let title = props.title ? props.title : "Home";
  return (
    <>
      <Seo title={title} description={props.description} />
      <div id={"root-" + title.toLowerCase()}>{props.children}</div>
    </>
  );
};

export default Root;
