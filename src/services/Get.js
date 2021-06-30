import axios from "axios";

export const Get = (url) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(url).then(
      (res) => {
        resolve(res);
      },
      (err) => reject(err.response)
    );
  });

  return promise;
};
