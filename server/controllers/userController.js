console.log('inside usercontroller');

const userModel = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signin = async ctx => {

  console.log('inside signin');

  const saltRounds = 10;
  const username = ctx.request.body.username;
  const password = ctx.request.body.password;

  console.log('inside signin');
  const users = await userModel.getUsers();
  for (let i = 0; i < users.length; i++) {
    if(req.body.username === users[i].username) {
      if (await bcrypt.compare(req.body.password , users[i].password)){
        // console.log('CORRECT PASSWORD', await bcrypt.compare(ctx.request.body.password , users[i].password));
        const token = await jwt.sign(ctx.body.username}, 'winniethepoop', {expiresIn: 2502000});
       ctx.send({
         details,
         token
       });
        console.log('THIS IS THE TOKEN:', token);
         ctx.status = 200;
      }
      else {
        console.log('INCORRECT PASSWORD', await bcrypt.compare(req.body.password , users[i].password));
        ctx.status = 400;
      }

    }

  }
}

exports.deleteUser = async ctx => {
  const users = await userModel.getUsers();
  for (let i = 0; i < users.length; i++) {
    if (ctx.request.body.username === users[i].username) {
      if (await bcrypt.compare(ctx.request.body.password , users[i].password)) {
        userModel.deleteOne(ctx.request.body)
        ctx.status = 201;
      } else {
        ctx.body = 'username and password combination not accepted'
        ctx.status = 401;
      }
    }
  }

}

exports.signup = async ctx => {
  console.log('inside signup');
  // console.log(ctx.request.body);
  let checked = false;
  const users = await userModel.getUsers();
  // console.log('THESE ARE THE USERS:', users);
  for (let i = 0; i < users.length; i++) {
    if (ctx.request.body.username === users[i].username) {
      checked = true;
    }
  }
  if (checked === true) {
    ctx.body = 'There is already an account with that username';
    ctx.status = 400;

  } else {
    userModel.postUsers(ctx.request.body)
    // console.log('check = false');
    ctx.status = 201;
  }
  // ctx.body = 'test working'
}

exports.signout = async ctx => {
  console.log('inside signout');
}
