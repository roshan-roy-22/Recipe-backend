const favourites = require('../Models/favoritesModel');

exports.addTofavouritesController =async (req,res)=>{
    const { id ,name , image, rating } = req.body
    const userId = req.payload
    try {
        const exisitingproduct = await favourites.findOne({ id, userId })
        if (exisitingproduct) {
            res.status(406).json("Recipe already availabale in favourite..")
        } else {
            const newRecipe = new favourites({
                id,name,  image, rating, userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
            console.log("Rsoahn");
        }
    } catch (error) {
        res.status(401).json(error)
    }

}

exports.getFavoritesController = async (req, res) => {
    const userId = req.payload
    try {
        const allRecipe = await favourites.find({ userId })
        res.status(200).json(allRecipe)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.removeFavouriteController = async (req, res) => {
    const { id } = req.params
    try {
        const removeFavourite = await favourites.findByIdAndDelete({ _id: id })
        res.status(200).json(removeFavourite)
    } catch (error) {
        res.status(401).json(error)
    }
}


