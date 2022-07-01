import Hotel from '../models/Hotel.js'

//CREATE HOTEL
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }
    catch (err) {
        next(err)
    }
}
//UPDATE HOTEL
export const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updateHotel)
    }
    catch (err) {
        next(err)
    }
}
//DELETE HOTEL
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted.")
    }
    catch (err) {
        next(err)
    }
}
//GET HOTEL
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }
    catch (err) {
        res.status(500).json(err)
    }
}
//GET ALL HOTELS
export const getAllHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }
    catch (err) {
        res.status(500).json(err)
    }
}