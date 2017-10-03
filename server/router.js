const Router = require('koa-router');
const router = new Router();

const userController = require('./controllers/userController.js');

// console.log('userController:', userController);
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/signout', userController.signout);


module.exports = router;
