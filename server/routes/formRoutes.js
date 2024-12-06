import express from 'express';
import formController from '../controllers/formController.js';

const router = express.Router();

router.post('/create', formController.createForm);
router.get('/forms', formController.getForms);
router.get('/form/:id', formController.getFormById);
router.put('/form/:id', formController.updateForm);
router.delete('/form/:id', formController.deleteForm);

export default router;