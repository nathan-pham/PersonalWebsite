import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import styles from "./header.module.css";

const Title = (props) => {
  return (
    <h1 className="title">
      <a href={props.href || "#"}>{props.children}</a>
    </h1>
  );
};

const Modal = ({ style }) => {
  return (
    <animated.div style={style} className={[styles.modal]}>
      <div>
        <Title>Home</Title>
        <Title>Projects</Title>
        <Title>Blog</Title>
        <Title>About</Title>
        <Title>Contact</Title>
      </div>
    </animated.div>
  );
};

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const transitions = useTransition(modalVisible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <header
        className={[
          styles.header,
          "flex",
          "direction-column",
          "justify-between",
          "align-center",
        ].join(" ")}
      >
        <img src="/icons/apple-icon.png" alt="N Logo" />
        <div
          onClick={() => setModalVisible(!modalVisible)}
          className={["flex", "align-center", "justify-center"].join(" ")}
        >
          <div
            className={[
              styles.hamburger,
              modalVisible ? styles.close : "",
            ].join(" ")}
          ></div>
        </div>
      </header>
      {transitions.map(
        ({ item, key, props: style }) =>
          item && <Modal style={style} key={key} />
      )}
    </>
  );
};

// return (
//   <div className="App">
//     <button
//       className="show-modal-button"
//       onClick={() => setModalVisible(true)}
//     >
//       Show modal
//     </button>
//     {transitions.map(
//       ({ item, key, props: style }) =>
//         item && (
//           <Modal
//             style={style}
//             closeModal={() => setModalVisible(false)}
//             key={key}
//           />
//         )
//     )}
//   </div>

//   <animated.div style={style} className="modal">
//   <h3 className="modal-title">Modal title</h3>
//   <p className="modal-content">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores
//     molestias praesentium impedit. Facere, perferendis voluptate at, amet
//     excepturi ratione mollitia nemo ipsum odit impedit doloremque rerum.
//     Quisquam, dolorum at?
//   </p>
//   <button className="modal-close-button" onClick={closeModal}>
//     Close
//   </button>
// </animated.div>

export default Header;
