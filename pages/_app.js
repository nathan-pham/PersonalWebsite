import "../styles/normalize.css";
import "../styles/globals.css";
import "../styles/flex.css";

import "../styles/root/index.css";
import "../styles/root/about.css";
import "../styles/root/contact.css";
import "../styles/root/projects.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default App;
