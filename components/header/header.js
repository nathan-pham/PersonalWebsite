import React, { Component } from "react";
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935
//https://reactjs.org/docs/animation.html
//https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6
//https://medium.com/atheros/fade-in-and-fade-out-animation-with-spring-and-transition-react-hooks-114eddbd74a7
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
