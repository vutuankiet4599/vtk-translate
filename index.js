import { isSupported } from "./languages.js";

function translate(text = "", options = { from: "auto", to: "vi" }) {
  return new Promise(function (resolve, reject) {
    if (typeof text !== "string") {
      throw new Error("Text must be a string");
    }

    if (typeof options !== "object") {
      throw new Error("Options must be an object");
    }

    if (!options.from) {
      options.from = "auto";
    }

    if (!options.to) {
      options.to = "vi";
    }

    if (!isSupported(options.from) || !isSupported(options.to)) {
      throw new Error("Options must be supported");
    }

    let url = new URL("https://translate.googleapis.com/translate_a/single");

    let params = {
      client: "gtx",
      sl: options.from,
      tl: options.to,
      dt: "t",
      q: text,
    };

    url.search = new URLSearchParams(params).toString();

    fetch(url).then((response) => {
      response
        .json()
        .then((responseData) => {
          resolve(responseData[0][0][0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

export default translate;
