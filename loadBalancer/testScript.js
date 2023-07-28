const axios = require("axios");

const n = 1000;

const promises = [];

for (let i = 0; i < n; i++) {
  promises.push(axios.get("http://127.0.0.1:80"));
}

(async () => {
  const result = await Promise.all(promises);
  console.log(
    "length:",
    result.length,
    "  responseArry: ",
    result.map((r) => r?.data)
  );
})();
