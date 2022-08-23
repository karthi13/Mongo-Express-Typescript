import { Router } from 'express';

import { getAllTodos, getTodo, addTodo, updateTodo, deleteTodo, deleteTodos} from '../controllers/todo.controller';

const router = Router();

router.get('/:todoId', getTodo);
router.get('/', getAllTodos);
router.post('/', addTodo);
router.put('/', updateTodo);
router.delete('/:todoId', deleteTodo);
router.delete('/', deleteTodos);

export default router;