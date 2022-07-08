let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");
let User = require("./models/user");

// connecting to database
mongoose.connect("mongodb://localhost/sample", (err) => {
    console.log(err ? err : "connected to database");
});

let app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(logger("dev"));


// routers
app.post("/users", (req, res, next) => {
    User.create(req.body, (err, user) => {
        if (err) {
            next(err);
        } else {
            res.json(user);
        }
    });
});

app.get("/users", (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            next(err);
        } else {
            res.json(user);
        }
    })
});


// app.get("/users/:id", (req, res, next) => {
//     let id = req.params.id;
//     User.find({ _id: id }, (err, user) => {
//         if (err) {
//             next(err);
//         } else {
//             res.json(user);
//         }
//     })
// });

// app.get("/users/:id", (req, res, next) => {
//     let id = req.params.id;
//     User.findOne({ _id: id }, (err, user) => {
//         if (err) {
//             next(err);
//         } else {
//             res.json(user);
//         }
//     })
// });

app.get("/users/:id", (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) {
            next(err);
        } else {
            res.json(user);
        }
    })
});

// The main difference is that when we use find we can find any of the document using any field and if we pass an empty object it will list all the 
// document inside that model 
// And when we use findOne it will return only the first document which matches the condition
// while if we use findById it will accept an id as an arguement then send the only one response.

// Q. Update a user

app.put("/users/:id", (req, res, next) => {
    let id = req.params.id;
    User.update({ _id: id }, req.body, { new: true }, (err, updatedOne) => {
        if (err) {
            next(err);
        } else {
            res.json(updatedOne);
        }
    })
});

// app.put("/users/:id", (req, res, next) => {
//     let id = req.params.id;
//     User.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, updatedOne) => {
//         if (err) {
//             next(err);
//         } else {
//             res.json(updatedOne);
//         }
//     })
// });

// app.put("/users/:id", (req, res, next) => {
//     let id = req.params.id;
//     User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedOne) => {
//         if (err) {
//             next(err);
//         } else {
//             res.json(updatedOne);
//         }
//     })
// });

// delete a user
app.delete("/users/:id", (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, user) => {
        if (err) {
            next(err);
        } else {
            res.send(`user is deleted successfully`);
        };
    })
})


// error handler 
app.use((req, res) => {
    res.send("Page not found");
})

app.listen(4000, () => {
    console.log("listening on port 4444");
});