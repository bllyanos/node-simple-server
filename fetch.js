const axios = require("axios");

axios.post("http://localhost:3210", { name: "badboy", abilities: ["none"] })
  .then(resp => {
    console.log(resp.data);
  })