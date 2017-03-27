'use strict'

class PostController {
  * index(request, response) {
   const allPosts = yield allPost.with('posts').fetch();
   response.JSON(allPosts);
  }

  * store(request, response) {
      const input = request.only('body', 'user_id');
      input.user_id = request.authUser.id;

      const post = yield Post.create(input);
      yield post.related('user').load();
      response.status(201).json(post);

  }

}

module.exports = PostController
