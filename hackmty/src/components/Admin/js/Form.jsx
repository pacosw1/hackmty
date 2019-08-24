import React, { Component } from "react";
import "../css/Form.css";
let axios = require("../../config/axios");
let _ = require("lodash");

class Form extends Component {
  state = {
    fields: {}
  };

  async componentDidMount() {
    let { match, edit, header } = this.props;
    if (edit) {
      let id = match.params.id;
      let result = await axios.getItem(header.toLowerCase(), id);
      console.log(result);
      this.setState({ fields: result.data });
    }
  }

  async onSubmit() {
    let { fields } = this.state;
    let header = this.props.header.toLowerCase();

    if (this.props.edit) {
      let id = this.props.match.params.id;
      fields = _.pick(fields, [...this.props.fields]);
      console.log(fields);
      await axios.editItem(header, fields, id);
    } else {
      await axios.createItem(header, fields);
    }
    return (window.location = "/manage/catalog/" + header);
  }

  updateField = field => {
    let { fields } = this.state;
    console.log(field.name);
    let { name, value } = field;
    fields[name] = value;
    this.setState({
      fields: fields
    });
  };
  render() {
    let { fields, onChange, header } = this.props;

    let form = fields.map(field => {
      return (
        <div className="input-div">
          <span>{field}</span>
          <input
            name={field}
            defaultValue={this.state.fields[field] || ""}
            placeholder={field}
            onChange={e => this.updateField(e.target)}
          />
        </div>
      );
    });
    return (
      <div id="form">
        <h4 style={{ margin: "0rem 1rem" }}>{header}</h4>
        <div id="fields"> {form}</div>
        <button className="payment" onClick={() => this.onSubmit()}>
          Guardar
        </button>
      </div>
    );
  }
}

export default Form;
