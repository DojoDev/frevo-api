'user strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const auth = require('../middleware/authetication');

let _ctrl = new  controller();
 
//Public Access
router.post('/authFrevo',_ctrl.authentication);

router.post('/register',_ctrl.post);

//Token auth required
router.get('/',auth, _ctrl.get);

router.get('/:id',auth, _ctrl.getById);

router.post('/',auth, _ctrl.post);

router.put('/:id',auth, _ctrl.put);

router.delete('/:id',auth, _ctrl.delete);

module.exports = router;