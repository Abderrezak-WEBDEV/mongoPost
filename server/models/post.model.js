// on va creer des postes sur la bd
const mongoose = require ("mongoose")
const PostSchema = new mongoose.Schema({
    title : 
    {
        type: String,
        required: true, // il faut un titre pour valider le poste
        unique: true, // titre unique evitez d'avoir deux fois le même titre 
        maxlenght: 200
    }, 
    content: 
        {
        type: String,
        required: true,
        unique: true, 
        maxlenght: 2000
        }, 
    auhor:
        {
        type: String,
        required: true, 
        maxlenght: 200,
        },
},
{
    timestamps: true
}// générer des dates de creation des postes automatiquement et permet un tri 
);
module.exports = mongoose.model("post", PostSchema);