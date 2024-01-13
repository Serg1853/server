import express from "express";
import morgan from "morgan";
import router from "./router";

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use("/files", router);

app.listen(3000, () => {
  console.log("Server running. Use our port 3000");
});
