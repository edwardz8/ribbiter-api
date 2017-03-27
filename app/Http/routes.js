'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')


Route.post('/users', 'UserController.store');
Route.get('/users', 'UserController.index');
Route.post('/login', 'UserController.login');
Route.post('/post', 'PostController.store').middleware('auth');
Route.get('/post', 'PostController.index').middleware('auth');

/*
Route.on('/').render('welcome')
Route.get('/user', 'UserController.index')
Route.get('/posts', 'PostController.index').middleware('auth');
Route.post('/users', 'UserController.store');
Route.post('/login', 'UserController.login');
Route.post('/posts', 'PostController.store').middleware('auth');
 */
