import express, { Router } from 'express';

import { indexUsers } from './controllers/users';

const router = Router();
	
router.route('/users.json')
	.get(indexUsers);
	
export default router;