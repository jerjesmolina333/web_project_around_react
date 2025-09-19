// import Section from "./Section.js";
import { cardListSelector, paramsValidationNP } from "../utils/constants.js";
import Section from "../../scripts/Section.js";
import { useEffect } from "react";

import { Card } from "../../scripts/Card.js";
import { agregaEventosBotonLike } from "../../scripts/utils.js";

let datosUs;
const initialImages = [];

export class Api {
  constructor({ linkUser, linkImags }, headers) {
    this._linkUs = linkUser;
    this._linkImags = linkImags;
    this._headers = headers;
  }

  getUserInfo() {
    // return fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
    //   headers: {
    //     authorization: "082ad1cf-6751-4277-bd54-4a8ddfdec0e7",
    //   },
    // })
    return fetch(this._linkUs, this._headers)
      .then(function (res) {
        return res.json();
      })

      .catch(function (error) {
        console.log(error);
        return Promise.reject(`Error: ${error}`);
      });
  }

  getImagesList() {
    return fetch(this._linkImags, this._headers)
      .then(function (res) {
        return res.json();
      })

      .catch(function (error) {
        console.log(error);
        return Promise.reject(`Error: ${error}`);
      });
  }

  _insertaImagen(name, link) {
    fetch(this._link, this._headers)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        agregaEventosBotonLike();
      })
      .catch(function (error) {
        console.log(error);
        return Promise.reject(`Error: ${error}`);
      });
  }
  _actualizaAvatar(newLink) {
    fetch(this._link, this._headers)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {})
      .catch(function (error) {
        console.log(error);
        return Promise.reject(`Error: ${error}`);
      });
  }

  _actualizaUsuario(nombre, about) {
    fetch(this._link, this._headers)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // console.log("=== DATA: " + data);
        // console.log("name: " + data.name);
        // console.log("About: " + data.about);
      })
      .catch(function (error) {
        console.log(error);
        return Promise.reject(`Error: ${error}`);
      });
  }
}

// debugger;
const params = {
  headers: {
    authorization: "082ad1cf-6751-4277-bd54-4a8ddfdec0e7",
  },
};

const api = new Api(
  {
    linkUser: "https://around-api.es.tripleten-services.com/v1/users/me",
    linkImags: "https://around-api.es.tripleten-services.com/v1/cards/",
  },
  params
);

export default api;
