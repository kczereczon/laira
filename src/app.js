import bodyParser from "body-parser";
import express from "express";
import { userRouter } from "./routes/user";
import { imaggaRouter } from "./routes/imagga";
import { viewsRouter } from "./routes/views";
import path from "path"

var app = express();

var jsonParser = bodyParser.json()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use('/api/user/', jsonParser, userRouter)
app.use('/api/imagga/', express.json({limit: '50mb', extended: true}), imaggaRouter)
app.use('/', express.urlencoded({limit: '50mb', extended: true}), viewsRouter)

export {app}

