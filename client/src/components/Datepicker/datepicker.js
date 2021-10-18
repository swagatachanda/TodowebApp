import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "./custominput";

class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selecteddate: null,
    };
    this.datevalue = this.datevalue.bind(this);
  }

  datevalue(date) {
    this.setState({ selecteddate: new Date(date) });
    localStorage.setItem(
      "url",
      `/note/all/${localStorage.getItem("data")}?date=${new Date(date)}`
    );
    window.location.assign("/mypage");
  }

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.selecteddate}
          onChange={this.datevalue}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          scrollableMonthYearDropdown
          customInput={<CustomInput />}
          placeholderText="Select a date"
        />
      </div>
    );
  }
}

export default Datepicker;
