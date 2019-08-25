import React, { Component } from "react";
import "../css/Table.css";
import { NavLink } from "react-router-dom";

let axios = require("../../config/axios");
class Catalogo extends Component {
  state = {
    data: []
  };

  selectRecord = id => {
    return (window.location = `/manage/catalog/${this.props.header.toLowerCase()}/get/${id}`);
  };
  async componentDidMount() {
    let { header } = this.props;
    let result = (await axios.getData(header.toLowerCase())) || [];
    if (result.data) {
      this.setState({ data: result.data });
    }
  }

  onDelete = async id => {
    let { header } = this.props;
    let result = await axios.deleteItem(header, id);
    return (window.location = "/manage/catalog/" + header.toLowerCase());
  };

  render() {
    let { data } = this.state;
    let { fields, header } = this.props;
    let fieldsList = fields.map(field => {
      return (
        <th key={field} scope="col">
          {field}
        </th>
      );
    });

    let dataList = data.map(record => {
      let td = fields.map(field => {
        if (header == "Products" && (field == "size" || field == "color")) {
          return (
            <td key={field} onClick={() => this.selectRecord(record._id)}>
              {record[field]}
            </td>
          );
        } else {
          return (
            <td key={field} onClick={() => this.selectRecord(record._id)}>
              {record[field]}
            </td>
          );
        }
      });

      return (
        <tr key={record._id} className="table-item">
          {td}
          <td>
            <button
              className="delete-button"
              onClick={() => this.onDelete(record._id)}
            >
              x
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="t">
        <h2>{header}</h2>
        <NavLink
          className="no-link"
          to={`/manage/catalog/${header.toLowerCase()}/new`}
        >
          <button>Nuevo</button>
        </NavLink>
        <div id="tables">
          <table className="table">
            <thead>
              <tr>
                {fieldsList}
                <th />
              </tr>
            </thead>

            <tbody>{dataList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Catalogo;
