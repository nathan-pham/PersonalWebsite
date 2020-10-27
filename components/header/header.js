import { useTransition, animated } from "react-spring";
import React, { useState } from "react";
import Link from "next/link";

import styles from "./header.module.css";

const Title = (props) => {
  return (
    <h1 className="title">
      <Link href={props.href || "#"}>{props.children}</Link>
    </h1>
  );
};

const Modal = ({ style }) => {
  return (
    <animated.div style={style} className={[styles.modal]}>
      <div>
        <Title href="/">Home</Title>
        <Title>Blog</Title>
        <Title href="/about">About</Title>
        <Title>Works</Title>
        <Title>Resume</Title>
        <Title href="/contact">Contact</Title>
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
        <Link href="/">
          <img src="/icons/apple-icon.png" alt="N Logo" />
        </Link>
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

export default Header;
