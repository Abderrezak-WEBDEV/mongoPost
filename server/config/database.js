
// mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);// pour securiser le code 
// avec la commande "npm/yarn i dotenv" pour la connexion à la base de données mondoddb

mongoose.connect(process.env.MONGOOB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>
   console.log('connecté à mongoose'))
   .catch((err) => console.log(err));

