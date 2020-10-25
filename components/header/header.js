import React, { Component } from "react";
import styles from "./header.module.css";

class Modal extends Component {
  render() {
    let classes = ["header-padding", styles.modal];
    if (this.props.show) {
      classes.push(styles.show);
    }

    return (
      <div className={classes.join(" ")}>
        <h1 className="title">Hello World</h1>
      </div>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
  }
  showModal() {
    this.setState((state) => {
      return {
        show: !state.show
      };
    });
  }
  render() {
    return (
      <>
        <header
          className={`${styles.header} flex justify-between align-center`}
        >
          <img src="/icons/apple-icon.png" alt="N Logo" />
          <div onClick={this.showModal}>
            <div className={styles.hamburger}></div>
          </div>
        </header>
        <Modal show={this.state.show} />
      </>
    );
  }
}

export default Header;
