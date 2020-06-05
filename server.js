const express = require("express");
const apiRoutes = require('./routes/routes.js');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Seperate api and html routes
// app.use("/api", apiRoutes);
app.use(apiRoutes);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});


