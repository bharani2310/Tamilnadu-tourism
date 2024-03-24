import express from 'express';
import { createReview , getReviewCount} from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router()
router.post('/:id',verifyUser,createReview)
router.get('/',getReviewCount)


export default router;