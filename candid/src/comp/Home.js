import React, { Component } from "react";
import Slider from "react-slick";
import Vivus from "vivus";
import "./Home.scss";
import styles from "./Home.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FilterListIcon from "@material-ui/icons/FilterList";
import BuildIcon from "@material-ui/icons/Build";
import Alertm from "./Alertm.js";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SubjectIcon from "@material-ui/icons/Subject";
import ListIcon from "@material-ui/icons/List";
import Select from "react-select";
import ReactHtmlParser from "react-html-parser";


const customStyles = {
  placeholder: () => ({
    opacity: 0.5,
    marginLeft: "10px",
    marginTop: "10px",
  }),
  menu: () => ({
    backgroundColor: styles.wi,
    textAlign: "center",
    color: styles.bl,
  }),
  option: () => ({
    fontFamily: styles.f3,
    fontWeight: 400,
    cursor: "pointer",
  }),
  singleValue: () => ({
    color: styles.bl,
    marginLeft: "10px",
  }),
  control: () => ({
    backgroundColor: styles.wi,
    width: "210px",
    color: styles.bl,
    height: "80px",
    fontFamily: styles.f3,
    fontWeight: 400,
    marginLeft: "2%",
    borderTopRightRadius: 5,
  }),
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        dots: false,
        infinite: true,
        autoplaySpeed: 15000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        pauseOnHover: false,
        fade: true,
        beforeChange: this.vidt,
      },
      w: window.scrollTo(0, 0),
      disp: { display: "none" },
      name: null,
      email: null,
      phone: null,
      selectedOption: null,
      text: null,
      a: null,
      m1: null,
      m2: null,
      qh: null,
      q: null,
      ch1: null,
      ch2: null,
      ch3: null,
      ch4: null,
      ch5: null,
      ch6: null,
      c1: null,
      c2: null,
      c3: null,
      c4: null,
      c5: null,
      c6: null,
      u4: null,
      u5: null,
      u6: null,
      options: null,
      buttons: [],
      vid: [],
      vi: null,
      count: 1,
    };
  }
  componentDidMount() {
    if (window.location.search === "?in=in") {
      document.getElementById("iq").scrollIntoView();
    }
    axios
      .post(`/hom`)
      .then((res) => {
        if (res.data.e) {
          this.setState({
            m1: res.data.e.m1,
            m2: res.data.e.m2,
            qh: res.data.e.qh,
            q: res.data.e.q,
            ch1: res.data.e.ch1,
            ch2: res.data.e.ch2,
            ch3: res.data.e.ch3,
            ch4: res.data.e.ch4,
            ch5: res.data.e.ch5,
            ch6: res.data.e.ch6,
            c1: res.data.e.c1,
            c2: res.data.e.c2,
            c3: res.data.e.c3,
            c4: res.data.e.c4,
            c5: res.data.e.c5,
            c6: res.data.e.c6,
            u4: res.data.e.u4,
            u5: res.data.e.u5,
            u6: res.data.e.u6,
            options: res.data.e.options,
            svg: res.data.e.svg,
            buttons: res.data.e.buttons,
            vid: res.data.e.vid,
          });
        }
        if (res.data.a) {
          this.setState({
            m1: res.data.a.m1,
            m2: res.data.a.m2,
            v1: res.data.a.v1,
            v2: res.data.a.v2,
            v3: res.data.a.v3,
            v4: res.data.a.v4,
            qh: res.data.a.qh,
            q: res.data.a.q,
            ch1: res.data.a.ch1,
            ch2: res.data.a.ch2,
            ch3: res.data.a.ch3,
            ch4: res.data.a.ch4,
            ch5: res.data.a.ch5,
            ch6: res.data.a.ch6,
            c1: res.data.a.c1,
            c2: res.data.a.c2,
            c3: res.data.a.c3,
            c4: res.data.a.c4,
            c5: res.data.a.c5,
            c6: res.data.a.c6,
            u4: res.data.a.u4,
            u5: res.data.a.u5,
            u6: res.data.a.u6,
            options: res.data.a.options,
            buttons: res.data.a.buttons,
            vid: res.data.a.vid,
          });
          document.getElementById("my-svg").innerHTML = res.data.a.svg;
        }
      })
      .then(() => {
        new Vivus("my-svg", { duration: 200 });
      })
      .then(() => {
        this.setState({
          vi: this.state.vid.map((key, index) => {
            let img = new Image();
            img.src = this.state.vid[index][0];
            let img0 = new Image();
            img0.src = this.state.vid[index][3];
            let d;
            if (index === 0) {
              d = "inline-block";
            } else {
              d = "none";
            }
            return (
              <React.Fragment key={index}>
                <span
                  className={ReactHtmlParser("vt &nbsp d" + [index + 1])}
                  style={{ display: d }}
                  onClick={() => this.vid(this.state.vid[index][1])}
                >
                  {ReactHtmlParser(this.state.vid[index][2])}{" "}
                  <PlayCircleOutlineIcon className="iv" />
                </span>
                <span
                  className={ReactHtmlParser("vidn &nbsp d" + [index + 1])}
                  style={{
                  backgroundImage: "url('" +this.state.vid[index][0] + "')",
                  display: d,
                  }}
                ></span>
                <span
                  className={ReactHtmlParser("vt &nbsp d" + [index + 1])}
                  style={{ display: d }}
                  onClick={() => this.vid(this.state.vid[index][4])}
                >
                  {ReactHtmlParser(this.state.vid[index][5])}{" "}
                  <PlayCircleOutlineIcon className="iv" />
                </span>
                <span
                  className={ReactHtmlParser("vidn &nbsp d" + [index + 1])}
                  style={{
                    backgroundImage: "url('" + this.state.vid[index][3] + "')",
                    display: d,
                  }}
                ></span>
              </React.Fragment>
            );
          }),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  vid = (v) => {
    window.open(v);
  };
  vidd = (v) => {
    let c = this.state.count + v;
    let x = this.state.count;
    if (c > 0 && c <= this.state.vid.length) {
      document.getElementsByClassName("d" + x)[1].style.display =
        "none";
      document.getElementsByClassName("d" + c)[1].style.display =
        "inline-block";
      document.getElementsByClassName("d" + x)[3].style.display =
        "none";
      document.getElementsByClassName("d" + c)[3].style.display =
        "inline-block";
      document.getElementsByClassName("d" + x)[0].style.display =
        "none";
      document.getElementsByClassName("d" + c)[0].style.display =
        "inline-block";
      document.getElementsByClassName("d" + x)[2].style.display =
        "none";
      document.getElementsByClassName("d" + c)[2].style.display =
        "inline-block";
      this.setState({ count: c });
    }
  };
  vidt = () => {
    document.querySelector(".vid").classList.add("flip");
    setTimeout(() => {
      document.querySelector(".vid").classList.remove("flip");
    }, 500);
    let c = this.state.count;
    if (c < this.state.vid.length) {
      document.getElementsByClassName("d" + c)[1].style.display = "none";
      document.getElementsByClassName("d" + [c + 1])[1].style.display =
        "inline-block";
      document.getElementsByClassName("d" + c)[3].style.display = "none";
      document.getElementsByClassName("d" + [c + 1])[3].style.display =
        "inline-block";
      document.getElementsByClassName("d" + c)[0].style.display = "none";
      document.getElementsByClassName("d" + [c + 1])[0].style.display =
        "inline-block";
      document.getElementsByClassName("d" + c)[2].style.display = "none";
      document.getElementsByClassName("d" + [c + 1])[2].style.display =
        "inline-block";
      this.setState({ count: c + 1 });
    } else {
      document.getElementsByClassName("d" + c)[1].style.display = "none";
      document.getElementsByClassName("d1")[1].style.display = "inline-block";
      document.getElementsByClassName("d" + c)[3].style.display = "none";
      document.getElementsByClassName("d1")[3].style.display = "inline-block";
      document.getElementsByClassName("d" + c)[0].style.display = "none";
      document.getElementsByClassName("d1")[0].style.display = "inline-block";
      document.getElementsByClassName("d" + c)[2].style.display = "none";
      document.getElementsByClassName("d1")[2].style.display = "inline-block";
      this.setState({ count: 1 });
    }
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption, disp: { display: "none" } });
  };
  change = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val, disp: { display: "none" } });
  };
  subic = (event) => {
    event.preventDefault();
    if (
      this.state.name &&
      this.state.email &&
      this.state.phone &&
      this.state.selectedOption &&
      this.state.text
    ) {
      this.setState({
        a: "Waiting...",
        disp: { display: "block", lineHeight: "75px" },
      });
      axios
        .post(`/three`, {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          selectedOption: this.state.selectedOption,
          text: this.state.text,
        })
        .then((res) => {
          if (res.data.e) {
            this.setState({
              a: res.data.e,
              disp: { display: "block", lineHeight: "75px" },
            });
          }
          if (res.data.a) {
            this.setState({
              a: res.data.a,
              disp: { display: "block", lineHeight: "75px" },
              name: null,
              email: null,
              phone: null,
              selectedOption: null,
              text: null,
            });
            document.getElementById("a1").reset();
          }
        })
        .catch((error) => {
          this.setState({
            a: error.response.statusText,
            disp: { display: "block", lineHeight: "75px" },
          });
        });
    } else {
      this.setState({
        a: "Inquiry from incomplete",
        disp: { display: "block", lineHeight: "75px" },
      });
    }
  };
  scr = () => {
    document.getElementById("iq").scrollIntoView();
  };
  render() {
    return (
      <React.Fragment>
        {this.state.w}
        <section className="welcome">
          <div id="w1">
            <svg id="my-svg" viewBox="0 0 500 500" />
            <h1>{ReactHtmlParser(this.state.m1)}</h1>
          </div>
          <div id="w2">
            <h2 onClick={this.scr}>{ReactHtmlParser(this.state.m2)}</h2>
          </div>
        </section>
        <Slider id="slide" {...this.state.settings}>
          <div>
            <img
              src="https://candid.s3-ap-southeast-2.amazonaws.com/wel1.jpg"
              alt="wel1"
            ></img>
          </div>
          <div>
            <img
              src="https://candid.s3-ap-southeast-2.amazonaws.com/wel2.jpg"
              alt="wel1"
            ></img>
          </div>
        </Slider>
        <section className="vid ">
          <span id="pn1" onClick={() => this.vidd(-1)}>
            &#x21bc;
          </span>
          {this.state.vi}
          <span id="pn2" onClick={() => this.vidd(+1)}>
           &#x21c0;
          </span>
        </section>
        <section className="info">
          <div className="info0">
            <div className="info1"></div>
          </div>
          <div className="info2">
            <hr style={{ boxShadow: `0 -5px 5px -5px ${styles.hbs}`, border: "7.5px solid transparent"}} />
            <h2>{ReactHtmlParser(this.state.qh)}<InfoIcon id="inf" /></h2>
            <hr style={{ boxShadow: ` 0 5px 5px -5px ${styles.hbs}`, border: "7.5px solid transparent"}} />
            <p>
              <q>{ReactHtmlParser(this.state.q)}</q>
            </p>
            <hr style={{ boxShadow: `0 -5px 5px -5px ${styles.hbs}` , border: "7.5px solid transparent"}} />
          </div>
        </section>
        <section className="card">
          <div className="card1">
            <div className="card2">
              <span>
                <h3>{ReactHtmlParser(this.state.ch1)}</h3>
                <img
                  src="https://candid.s3-ap-southeast-2.amazonaws.com/card1.png"
                  alt="Smiley face"
                  width="50"
                  height="50"
                ></img>
              </span>
            </div>
            <p>{ReactHtmlParser(this.state.c1)}</p>
            <StarBorderIcon className="cardi" />
            <FilterListIcon className="cardf" />
          </div>
          <div className="card1">
            <div className="card2">
              <span>
                <h3>{ReactHtmlParser(this.state.ch2)}</h3>
                <img
                  src="https://candid.s3-ap-southeast-2.amazonaws.com/card2.png"
                  alt="Smiley face"
                  width="50"
                  height="50"
                ></img>
              </span>
            </div>
            <p>{ReactHtmlParser(this.state.c2)}</p>
            <WhatshotIcon className="cardi" />
            <FilterListIcon className="cardf" />
          </div>
          <div className="card1">
            <div className="card2">
              <span>
                <h3>{ReactHtmlParser(this.state.ch3)}</h3>
                <img
                  src="https://candid.s3-ap-southeast-2.amazonaws.com/card3.png"
                  alt="Smiley face"
                  width="50"
                  height="50"
                ></img>
              </span>
            </div>
            <p>{ReactHtmlParser(this.state.c3)}</p>
            <BuildIcon className="cardi" />
            <FilterListIcon className="cardf" />
          </div>
          <div className="card1">
            <div className="card2">
              <span>
                <h3>{ReactHtmlParser(this.state.ch4)}</h3>
                <img
                  src="https://candid.s3-ap-southeast-2.amazonaws.com/card4.png"
                  alt="Smiley face"
                  width="50"
                  height="50"
                ></img>
              </span>
            </div>
            <p>{ReactHtmlParser(this.state.c4)}</p>
            <a target="4" href={this.state.u4}>
              {ReactHtmlParser(this.state.buttons[0])}
            </a>
            <FilterListIcon className="cardf" />
          </div>
          <div className="card1">
            <div className="card2">
              <span>
                <h3>{ReactHtmlParser(this.state.ch5)}</h3>
                <img
                  src="https://candid.s3-ap-southeast-2.amazonaws.com/card5.png"
                  alt="Smiley face"
                  width="50"
                  height="50"
                ></img>
              </span>
            </div>
            <p>{ReactHtmlParser(this.state.c5)}</p>
            <a target="5" href={this.state.u5}>
              {ReactHtmlParser(this.state.buttons[0])}
            </a>
            <FilterListIcon className="cardf" />
          </div>
          <div className="card1">
            <div className="card2">
              <span>
                <h3>{ReactHtmlParser(this.state.ch6)}</h3>
                <img
                  src="https://candid.s3-ap-southeast-2.amazonaws.com/card6.png"
                  alt="Smiley face"
                  width="50"
                  height="50"
                ></img>
              </span>
            </div>
            <p>{ReactHtmlParser(this.state.c6)}</p>
            <a target="6" href={this.state.u6}>
              {ReactHtmlParser(this.state.buttons[0])}
            </a>
            <FilterListIcon className="cardf" />
          </div>
        </section>
        <section id="iq" className="inq">
          <div className="rh">
            <h1>{ReactHtmlParser(this.state.buttons[1])}</h1>
          </div>
          <br></br>
          <form
            id="a1"
            autoComplete="off"
            style={{
              width: "100%",
              fontFamily: styles.f3,
              color: styles.wi,
            }}
            onSubmit={this.subic}
          >
            <TextField
              className="www"
              InputProps={{
                style: {
                  color: styles.bl,
                  marginLeft: "2%",
                  backgroundColor: styles.wi,
                  borderRadius: 0,
                  fontSize: "120%",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              type="text"
              name="name"
              placeholder="Name:"
              onChange={this.change}
            />
            <TextField
              className="www"
              InputProps={{
                style: {
                  color: styles.bl,
                  marginLeft: "2%",
                  backgroundColor: styles.wi,
                  borderRadius: 0,
                  fontSize: "120%",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              type="email"
              name="email"
              placeholder="Email:"
              onChange={this.change}
            />
            <TextField
              className="www"
              inputProps={{
                pattern: "[+]*[0-9]{8,14}",
              }}
              InputProps={{
                style: {
                  color: styles.bl,
                  marginLeft: "2%",
                  backgroundColor: styles.wi,
                  borderRadius: 0,
                  fontSize: "120%",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              type="tel"
              name="phone"
              placeholder="Phone:"
              onChange={this.change}
            />
            <div style={{ height: "220px", marginTop: "5px" }}>
              <ListIcon style={{ color: styles.wi, marginLeft: "27.5px" }} />
              <Select
                classNamePrefix="react-select"
                maxMenuHeight={100}
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={this.state.options}
                styles={customStyles}
                placeholder={ReactHtmlParser(this.state.buttons[3])}
              />
            </div>
            <SubjectIcon
              style={{
                color: styles.wi,
                marginLeft: "12.5px",
                marginBottom: "7.5px",
                display: "block",
              }}
            />
            <TextField
              multiline
              className="text"
              rows="20"
              fullWidth={true}
              InputProps={{
                disableUnderline: true,
                style: {
                  color: styles.bl,
                  display: "block",
                  width: "100%",
                  height: "150px",
                  backgroundColor: styles.wi,
                  borderRadius: 0,
                  overflowY: "auto",
                  overflowX: "hidden",
                  fontSize: "120%",
                },
              }}
              variant="filled"
              type="text"
              name="text"
              placeholder="Text:"
              onChange={this.change}
            />
            <Button
              style={{
                color: styles.wi,
                backgroundColor: styles.bl,
                width: "100%",
                height: "60px",
                fontSize: "120%",
                paddingTop: "10px",
                borderRadius: 0,
              }}
              variant="contained"
              type="submit"
            >
              {ReactHtmlParser(this.state.buttons[2])}
            </Button>
            <div style={{ height: "75px" }}>
              <div style={this.state.disp}>
                <Alertm alert={this.state.a} />
              </div>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
