const {
    createUser,
    deleteUser,
    getUsers,
    updateUser,
    getUser
} = require('../controllers/users')

const router = require('express').Router()

const {protect,authorize} =  require('../middleware/auth');
const { route } = require('./auth');

router.use(protect);
router.use(authorize('admin'));

router
    .route('/')
    .get(getUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router


