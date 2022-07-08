import Hotel from '../models/Hotel.js'
import Room from '../models/Room.js'
import { createError } from '../utils/error.js'

//CREATE ROOMS
export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try {
        const saveRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: saveRoom._id }
            })
        } catch (err) {
            next(err)
        }
        res.status(200).json(saveRoom)
    } catch (err) {
        next(err)
    }
}
//UPDATE ROOM
export const updateRoom = async (req, res, next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updateRoom)
    }
    catch (err) {
        next(err)
    }
}
//DELETE ROOM
export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id }
            })
        } catch (err) {
            next(err)
        }
        res.status(200).json("Room has been deleted.")
    }
    catch (err) {
        next(err)
    }
}
//GET ROOM
export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    }
    catch (err) {
        next(err)
    }
}
//GET ALL ROOMS
export const getAllRooms = async (req, res, next) => {
    try {
        const room = await Room.find()
        res.status(200).json(room)
    }
    catch (err) {
        next(err)
    }
}