import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import postRoutes from './Routes/Posts.js'



const app = express();
app.use('/posts', postRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const mongoURL = 'mongodb+srv://m66are:284651Mm@cluster0.tztzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const port = process.env.PORT || 5000;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () =>
        console.log(`App is Running on : ${port}`)
    ))
    .catch((error) => console.log(error));


mongoose.set('useFindAndModify', false);


