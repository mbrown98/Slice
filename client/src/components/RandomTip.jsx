import React from "react";
import randomTips from "../../../database/randomTips.json";

class RandomTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.populate = this.populate.bind(this);
  }

  componentDidMount() {
    this.populate();
  }

  populate() {
    let val = Math.floor(Math.random() * randomTips.randomTips.length);
    let title = randomTips.randomTips[val].title;
    let description = randomTips.randomTips[val].description;
    this.setState({ title: title });
    this.setState({ description: description });
  }

  render() {
    return (
      <article className="message is-primary">
        <div className="message-header">
          <p>Budget Tips:</p>
        </div>
        <div className="message-body">
          <label className="subtitle is-4">{this.state.title}</label>
          <p>{this.state.description}</p>
        </div>
      </article>
    );
  }
}

export default RandomTip;
