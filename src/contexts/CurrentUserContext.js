import React from "react";
import api from "../utils/Api";
import { createContext } from "react";

export const CurrentUserContext = createContext();
export let currentUser;
