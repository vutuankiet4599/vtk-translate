import axios from "axios";
import { isSupported } from "./languages.js";

function translate(text = "", options = { from: "auto", to: "vi" }) {
  return new Promise(function (resolve, reject) {
    if (typeof text !== "string") {
      reject(new Error("Text must be a string"));
    }

    if (typeof options !== "object") {
      reject(new Error("Options must be an object"));
    }

    if (!options.from) {
      options.from = "auto";
    }

    if (!options.to) {
      options.to = "vi";
    }

    if (!isSupported(options.from) || !isSupported(options.to)) {
      reject(new Error("Options must be supported"));
    }

    let params = {
      client: "gtx",
      sl: options.from,
      tl: options.to,
      dt: "t",
      q: text,
    };

    axios
      .get("https://translate.googleapis.com/translate_a/single", {
        params: params,
      })
      .then((response) => {
        resolve(response.data[0][0][0]);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default translate;
