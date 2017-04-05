const express = require('express');
const router = express.Router();
const knex = require('../knex')
/* GET home page. */
router.get('/', (req, res, next) => {
  knex('posts')
  .then(posts => {
    res.render('posts', { title: "Posts", posts });
  })
});

router.get('/create', (req, res, next) => {
  res.render('create');
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;

  knex('posts')
  .where('id', id)
  .then(posts => {
    let post = posts[0]
    res.render('edit', { post });
  })
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  knex('posts')
  .where('id', id)
  .then(post => {
    res.render('single', { post });
  })
})

router.post('/', (req, res, next) => {
  let title = req.body.title;
  let body = req.body.body;

  knex('posts')
  .insert({ title, body })
  .then(() => {
    res.redirect('/posts');
  })
})

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;

  knex('posts')
  .where('id', id)
  .returning('*')
  .del()
  .then(() => {
    res.sendStatus(200);
  });
})

router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  let title = req.body.title;
  let body = req.body.body;

  knex('posts')
  .where('id', id)
  .update({ title, body })
  .then(() => {
    res.sendStatus(200);
  })
})

module.exports = router;
