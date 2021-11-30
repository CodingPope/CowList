import React from "react";
import axios from "axios";
import CowForm from "./CowForm.js";
import SingleCow from "./SingleCow.js";

export default class Cows extends React.Component {
  static emptyCow() {
    return {
      id: null,
      name: "",
      description: "",
    };
  }
  constructor(props) {
    super(props);

    this.state = {
      cow: Cows.emptyCow(),
      cowList: [],
    };
    this.addCow = this.addCow.bind(this);
    this.cowInfo = this.cowInfo.bind(this);
    this.updateCow = this.updateCow.bind(this);
    this.deleteCow = this.deleteCow.bind(this);
    this.addCowInfo = this.addCowInfo.bind(this);
    this.readCow = this.readCow.bind(this);
  }

  cowInfo(cow) {
    event.stopPropagation();
    this.setState({
      cow,
    });
  }

  addCowInfo(e) {
    e.preventDefault();
    this.setState({
      cow: {
        ...this.state.cow,
        [e.target.name]: e.target.value,
      },
    });
  }

  addCow(e) {
    e.preventDefault();
    axios.post("/api/cows", this.state.cow).then(this.readCow());
  }

  readCow() {
    axios
      .get("/api/cows")
      .then((res) => {
        console.log("==", res);
        this.setState({
          cowList: res.data,
        });
      })
      .catch((err) => {
        console.log(err, err.message);
      });
  }

  updateCow() {
    axios
      .put(`/api/cows/${this.state.cow.id}`, this.state.cow)
      .this(this.readCow())
      .catch((err) => {
        console.log(err, err.message);
      });
  }

  deleteCow() {
    axios
      .delete(`/api/cows/${this.state.cow.id}`)
      .then(this.readCow())
      .catch((err) => {
        console.log(err, err.message);
      });
  }

  componentDidMount() {
    this.readCow();
  }

  render() {
    return (
      <>
        <div>
          <h1>Cow List</h1>
          <CowForm
            cow={this.state.cow}
            addCowInfo={this.addCowInfo}
            addCow={this.addCow}
          />
          <br />
          <ul>
            {this.state.cowList.map((cow) => (
              <SingleCow cow={this.state.cow} cowInfo={this.cowInfo} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
