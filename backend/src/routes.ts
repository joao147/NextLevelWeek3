import { Router } from 'express';
import multer from 'multer'; 

import uploadConfig from './config/upload'
import OrphanagesControllers from './controllers/OrphanagesController';

const routes = Router();
const uploads = multer(uploadConfig);

routes.get('/orphanages', OrphanagesControllers.index);
routes.get('/orphanages/:id', OrphanagesControllers.show);
routes.post('/orphanages', uploads.array('images'), OrphanagesControllers.create);

export default routes;