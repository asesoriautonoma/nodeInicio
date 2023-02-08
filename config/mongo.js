const mongoose = require("mongoose");
const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
    useNewUrlParser:true,
    useUnifiedTopoly:true,
});
};
module.exports = dbConnect;

//mongodb+srv://KendoGG:JhoanSena5267HRg#@cluster0.cjg6k6a.mongodb.net/dbapi?retryWrites=true&w=majority