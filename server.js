import express from "express";
import sendOtpRoute from "./src/routes/sent-otp.route.js";
import getOtpRoute from "./src/routes/sent-otp.route.js";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", sendOtpRoute);
app.use("/api", getOtpRoute);

app.listen(8000, () => {
  console.log("✅ Server is running on http://localhost:8000");
});
