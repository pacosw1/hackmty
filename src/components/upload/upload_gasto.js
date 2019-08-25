import React from "react";
import useForm from "../hooks/useForm";

export default function upload_gasto(props) {
  const [form, handleInput] = useForm();
  const loggedUser = localStorage.getItem("loggedUser");
  function onChange(value) {
    form.team = value;
    console.log(`selected ${value}`);
  }
  const createPosta = () => {
    axios
      .post(
        `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${params.id}/post`,
        form
      )
      .then(({ data }) => {
        user.publicaciones.push(data.publicacion._id);

        localStorage.setItem("loggedUser", JSON.stringify(user));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const createPost = () => {
    axios
      .get(
        `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${params.id}`
      )
      .then(({ data }) => {
        form.rfc = loggedUser.rfc;
        axios
          .post(
            `https://polar-savannah-65683.herokuapp.com/liga/LigaMX/${params.id}/post`,
            form
          )
          .then(({ data }) => {
            user.publicaciones.push(data.publicacion._id);

            localStorage.setItem("loggedUser", JSON.stringify(user));
          })
          .catch(err => {
            console.log(err);
          });
      });
  };

  return (
    <div className="upload_gasto">
      <h2>Ingresa un gasto nuevo</h2>

      <input
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="Product Id"
        name="productid"
        id="name"
        onChange={handleInput}
      />
      <input
        prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="Quantity"
        name="quantity"
        id="quantity"
        onChange={handleInput}
      />
      <input
        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="Cost"
        name="cost"
        id="cost"
        onChange={handleInput}
      />

      <button type="primary" onClick={createPosta}>
        Upload
      </button>
    </div>
  );
}
