var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', async function(req, res, next) {
  const rows = await prisma.user.findMany({
  })
  res.json(rows)
});

router.get('/models', async function(req, res, next) {
  const rows = await prisma.model.findMany({
    include: {
      ModelLine: true
    }
  })
  res.json(rows)
});

module.exports = router;
