import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import postRoutes from './routes/posts_route.js'



const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

// const mongoURL = 'mongodb+srv://m66are:284651Mm@cluster0.tztzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`App is Running on : ${port}`));
// mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(port, () =>
//         console.log(`App is Running on : ${port}`)
//     ))
//     .catch((error) => console.log(error));


mongoose.set('useFindAndModify', false);


