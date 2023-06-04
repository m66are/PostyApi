import express from 'express'

import {getPosts,createPost} from '../controllers/posts_controller.js'
const router = express.Router();
router.get('/', getPosts);
router.post('/add', createPost);
export default router;