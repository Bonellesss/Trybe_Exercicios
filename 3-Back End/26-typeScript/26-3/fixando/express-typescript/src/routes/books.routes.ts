import { Router } from 'express';
import { BooksController } from '../controllers';
import { validationBook } from '../middlewares';

const router = Router();

const booksController = new BooksController();

const booksSlashId = '/books/:id';

router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.delete(booksSlashId, booksController.remove);
router.use(validationBook);
router.post('/books', booksController.create);
router.put(booksSlashId, booksController.update);

export default router;
