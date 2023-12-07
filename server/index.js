import "dotenv/config";
import express from "express";
import "./config/db.js"; // Adjust the path accordingly
import cors from "cors";
import companyRouters from "./routes/companyRouters.mjs"; // Adjust the path accordingly
import userRouters from "./routes/userRouters.mjs";
import dashboardRouter from "./routes/dashboardRouter.mjs";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("./uploads"));
app.use("/useruploads", express.static("./userUploads"));
app.use(companyRouters);
app.use(userRouters);
app.use(dashboardRouter);

app.listen(port, () => {
  console.log("Server start");
});
