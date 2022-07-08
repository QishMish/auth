require("express-async-errors");
import "dotenv/config";
import app from "./app";
import App from "./app";

App.listen(3333, () => {
  console.log(`App listening on the port ${3333}`);
});

process.on("uncaughtException", (err, origin) => {
  console.log("crashed");
  App.listen(3333, () => {
    console.log(`App listening on the port ${3333}`);
  });
});
