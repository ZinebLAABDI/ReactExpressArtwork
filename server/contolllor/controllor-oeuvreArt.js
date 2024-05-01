const oeuvreSchema=require('../models/oeuvreSchema');

exports.getAllOeuvre=async (req,res) => {
    try{
        const oeuvre= await oeuvreSchema.find({});
        res.status(200).json(oeuvre)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
exports.GetOeuvreById=async (req, res) => {
    try{
        const{id} =req.params;
        const oeuvre =await oeuvreSchema.findById(id);
        res.status(200).json(oeuvre);
    }catch(error){
        res.status(500).json({message:error.message}) 
    }
}

exports.AddOeuvre = async (req, res) => {
    try {
        const { title, artist, year,file } = req.body;

        // Check if required fields are provided
        if (!title || !artist || !year) {
            return res.status(400).json({ message: 'Title, artist, and year are required' });
        }

        // Create a new artwork instance
        const newOeuvre = new oeuvreSchema({ title, artist, year,file });

        // Save the artwork to the database
        const result = await newOeuvre.save();

        res.json({ data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateOeuvre =async (req, res) =>{
    try{
    const {title,artist,year,file} = req.body
    const {id}=req.params;
    const oeuvre= await oeuvreSchema.findByIdAndUpdate(id,{title,artist,year,file})
    if(!oeuvre){
    return res.status(404).json(`message: cannot find any product with ID ${id}`);
}
const updateOeuvre =await oeuvreSchema.findById(id);
res.status(200).json(updateOeuvre);
    }catch(error){
        res.status(500).json({message:error.message}) 
    }
}


exports.deleteOeuvre = async (req, res) => {
 try{
    const {id}=req.params;
    const Oeuvre= await oeuvreSchema.findByIdAndDelete(id);
    if(!Oeuvre){
        return res.status(404).json({message:`cannot find any Oeuvre with ID ${id}`})
    }
        res.status(200).json(Oeuvre);
    

 }catch(error){
    res.status(500).json({message: error.message})
 } 
}