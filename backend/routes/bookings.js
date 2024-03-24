import express from 'express';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { createBooking, getAllBooking, getBooking , getBookingsCount, handleCancel,handleUpdate} from '../controllers/bookingController.js';

const router = express.Router()
router.post('/',createBooking)
router.get('/:id',getBooking)
// router.get('/',getAllBooking)
router.delete('/:id',verifyUser,handleCancel)
router.put('/:id',handleUpdate)
router.get('/',getBookingsCount)


export default router;