import express from 'express';
import {postgalleryImages,putgalleryImages,getGalleryCount, getAllGallery,deleteGallery,GalleryImages,getSingleGalleryImages } from './../controllers/galleryController.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router()
router.get("/",GalleryImages);
router.get("/images/:id",getSingleGalleryImages);
router.post('/',postgalleryImages)
router.put('/:id',putgalleryImages)
router.get('/search/getGalleryCount',getGalleryCount);
router.get("/getAll",getAllGallery);
router.delete("/:id",verifyAdmin,deleteGallery);

export default router;