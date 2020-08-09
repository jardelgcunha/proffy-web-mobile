import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// routes: http://localhost:3333/users
// resources: users
app.listen(3333);
