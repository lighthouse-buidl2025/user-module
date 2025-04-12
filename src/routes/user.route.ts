import { Router } from 'express';
import {
  getUser,
  setEmail,
  setTelegram,
  signup
} from '../controllers/user.controller';

const router = Router();

router.get('/:address', getUser);
router.post('/signup', signup);
router.post('/email/:address', setEmail);
router.post('/telegram/:address', setTelegram);

export default router;
