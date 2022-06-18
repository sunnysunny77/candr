import React, { Component } from "react";
import "./Gallery.scss";
import ImageGallery from "react-image-gallery";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

export default class Galery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.scrollTo(0, 0),
      res: {},
      load: true,
    };
  }
  componentDidMount() {
    if (this.state.load) {
      this.props.setLoad("none");
    }
    axios
      .post(`/g`)
      .then((res) => {
        this.setState({ res: res.data, load: false });
        this.props.setLoad("block");
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.load ? (
          <React.Fragment>
            <img
              className="load"
              src="https://candid.s3-ap-southeast-2.amazonaws.com/load.gif"
              alt="loading"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {this.state.w}
            <div className="rh">
              <h1> {ReactHtmlParser(this.state.res.buttons[0])}</h1>
            </div>
            <section id="gl">
              <ImageGallery items={this.state.res.images} />
            </section>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
