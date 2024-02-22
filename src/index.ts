import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import webscraperfunc from "./services/scrape";


const app:Express = express();


app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(morgan("dev"));

  app.use(express.json());

  webscraperfunc("https://google.com")

  app.listen(5002,()=>{
    console.log("listening at port 5002")
  })