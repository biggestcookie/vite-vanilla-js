import moment from "moment"; // Moment.js is deprecated, just importing it for example
import "./style.css";

const app = document.querySelector("#app");
const currentMoment = moment().format("LLLL");

if (app) {
  app.textContent = `Hello world! The date and time this page loaded was: ${currentMoment}`;
}
