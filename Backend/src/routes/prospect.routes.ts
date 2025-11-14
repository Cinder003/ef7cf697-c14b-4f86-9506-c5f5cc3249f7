import { Router } from 'express';
import {
  createProspect,
  getAllProspects,
  getProspectById,
  updateProspect,
  deleteProspect,
} from '../controller/prospect.controller';
import validateRequest from '../middleware/validateRequest';
import { createProspectSchema, updateProspectSchema } from '../validation/prospect.validation';

const router = Router();

router.get('/', getAllProspects);
router.get('/:id', getProspectById);
router.post('/', validateRequest(createProspectSchema), createProspect);
router.put('/:id', validateRequest(updateProspectSchema), updateProspect);
router.delete('/:id', deleteProspect);

export default router;