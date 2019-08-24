let axios = require("axios");

axios.defaults.baseURL = "";

exports.saveImages = formData =>
  axios
    .post("images", formData)
    .then(res => res.data.data)
    .catch(err => err.message);


exports.getData = route =>
  axios
    .get(route)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });

exports.getItem = (route, id) =>
  axios
    .get(`${route}/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });
exports.editItem = (route, fields, id) =>
  axios
    .put(`${route}/${id}`, fields)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });
exports.createItem = (route, fields) =>
  axios
    .post(route, fields)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });

exports.deleteItem = (route, id) =>
  axios
    .delete(`${route}/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });
