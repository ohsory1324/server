console.log('authRouter.js');

const authRouter = require('express').Router();
const authContorller = require('./authController');

/* 정렬 순서
 * GET
 * POST
 * PUT
 * DELETE
 */

authRouter.route('/wiki/register')
.post(authContorller.createWikiUser);

authRouter.route('/wiki/login')
.post(authContorller.loginWiki);

authRouter.route('wiki/logout')
.delete(authContorller.logoutWiki);

module.exports = authRouter;
