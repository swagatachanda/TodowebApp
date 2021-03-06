import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@material-ui/core/Button";
import "./forgetpassword.css";

class Forgetpass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
      passcode: "",
      id_: "",
    };
    this.visibleon = this.visibleon.bind(this);
    this.visibleoff = this.visibleoff.bind(this);
    this.setpass = this.setpass.bind(this);
    this.checkcode = this.checkcode.bind(this);
    this.updatepass = this.updatepass.bind(this);
  }

  async updatepass() {
    const url = `api/user/login/forgetpassword`;
    var data = {
      id: this.state.id_,
      password: this.refs.newpass.value,
    };
    if (data.password.length < 4 || data.password.length > 8) {
      this.refs.errmsg.style.color = "red";
      this.refs.errmsg.style.display = "flex";
      this.setState({
        msg: "Password length must be greater than 4 and less than 8",
      });
      setTimeout(() => {
        this.refs.errmsg.style.display = "none";
      }, 2000);
      return;
    }
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((Response) => Response.json())
      .then((data) => {
        this.refs.errmsg.style.color = "green";
        this.refs.errmsg.style.display = "flex";
        this.refs.errmsg.innerHTML = data.data;

        window.location.assign("/");
      });
  }

  setpass(term) {
    // console.log(term)
    this.setState({
      passcode: term.target.value,
    });
  }

  componentDidMount() {
    document.title = "MyNotes/Forgetpassword";
  }

  async checkcode() {
    if (localStorage.getItem("code") == null) {
      this.refs.err.style.display = "block";
      this.refs.err.innerHTML =
        "Email cannot be found. Please go back to the login page to enter your email first.";
      setTimeout(() => {
        this.refs.err.style.display = "none";
      }, 2000);
      return;
    }
    var pass = {
      passcode: this.state.passcode,
    };
    const URL = `api/user/matchpass/@${localStorage.getItem("code")}`;
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(pass),
    })
      .then((Response) => Response.json())
      .then(async (back) => {
        if (back.status) {
          this.setState({
            id_: back.data._id,
          });
          this.refs.pass.style.display = "block";
          this.refs.passbutton.style.display = "flex";
          localStorage.removeItem("code");
        } else {
          this.refs.err.style.display = "block";
          this.refs.err.innerHTML = back.error;
          setTimeout(() => {
            this.refs.err.style.display = "none";
          }, 2000);
        }
      });
  }

  visibleon() {
    if (!this.state.visibility) {
      this.refs.newpass.type = "text";
      this.setState({
        visibility: true,
      });
    }
    this.refs.showpassoff.style.display = "block";
    this.refs.showpasson.style.display = "none";
  }

  visibleoff() {
    if (this.state.visibility) {
      this.refs.newpass.type = "password";
      this.setState({
        visibility: false,
      });
    }
    this.refs.showpassoff.style.display = "none";
    this.refs.showpasson.style.display = "block";
  }

  render() {
    return (
      <div className="content-container">
        <div className="login-container">
          <div className="msg">
            Enter the correct code sent in your mail to change the password
          </div>
          <div className="username">
            <div className="label">Code</div>
            {/* <div ref="err"></div> */}
            <div className="input-field">
              <div>
                <div className="codecheck">
                  <input
                    type="text"
                    className="input code"
                    ref="passcodecheck"
                    required
                    placeholder=""
                    onChange={this.setpass}
                  ></input>
                  <Button onClick={this.checkcode}>OK</Button>
                </div>
                <div style={{ color: "black" }}>
                  (If you dont recieve the code in your mail, please check your
                  spambox)
                </div>
                <div
                  className="border"
                  ref="err"
                  style={{ color: "red" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="password" style={{ display: "none" }} ref="pass">
            <div className="label">Password</div>
            <div className="input-field">
              <div className="whole-input" style={{ display: "flex" }}>
                <input
                  type="password"
                  ref="newpass"
                  className="input pass"
                  required
                  placeholder=""
                ></input>
                <div
                  className="show-icon"
                  style={{ display: "flex", paddingTop: "12px" }}
                >
                  <VisibilityIcon onClick={this.visibleon} ref="showpasson" />
                  <VisibilityOffIcon
                    style={{ display: "none" }}
                    ref="showpassoff"
                    onClick={this.visibleoff}
                  />
                </div>
              </div>
              <div className="border" ref="errmsg" style={{ color: "red" }}>
                {this.state.msg}
              </div>
            </div>
          </div>
          <div className="button-container">
            <div className="error-message"></div>
            <div
              className="button login"
              style={{ display: "none" }}
              ref="passbutton"
            >
              <Button onClick={this.updatepass}>Change</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgetpass;
