import express from "express";
import { florestaRouter } from "./src/routes/routes.js";
import { deforestationRouter } from "./src/routes/desmatacao-router.js";
import { pollutionRouter } from "./src/routes/poluicao-router.js";

const app = express();

app.use(express.json());
app.use('/floresta', florestaRouter);  //--> book/all
app.use('/desmatacao', deforestationRouter);
app.use('/pollution', pollutionRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Nosso app está rodando na porta: http://localhost:${PORT}`);
});
