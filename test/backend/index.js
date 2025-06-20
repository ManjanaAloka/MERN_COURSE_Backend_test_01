import express from 'express';

const app = express();

app.get("/",
    () => {
        console.log("get request");
    }
);

app.post("/",
    () => {
        console.log("post request");
    }
);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});