import { Router } from 'express';

import expenseRouter from './expense';
import todoRouter from './todo';

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  res.send({ title: 'Express', session: req.session, user: req.user });
});


router.use('/api/expense', expenseRouter);
router.use('/api/todo', todoRouter);


export default router;
