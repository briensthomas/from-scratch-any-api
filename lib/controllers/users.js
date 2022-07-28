const { Router } = require('express');
const UserInfo = require('../models/UserInfo');

const router = Router();

router
  .get('/', async (req, res) => {
    const users = await UserInfo.getAllUsers();
    const data = users.map((user) => 
      ({ first_name: user.first_name, email: user.email }));
    res.json(data);
  });

module.exports = router;
