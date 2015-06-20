var express = require('express');
var router = express.Router();
var id_array = [];
var id = -1;
var messageId = -1;

/* GET contacts */
router.get('/:id', function(req, res, next) {
	res.send(id_array[+req.params.id]);
});

router.post('/', function(req, res, next) {
	
	console.log(req.body);

	id++;
  req.body.messages=[];
	id_array[id] = req.body;

	res.send((id).toString());
});

router.put('/:id', function(req, res, next) {
  console.log(req.body);
  var a1=req.body;
  var a2=id_array[+req.params.id];
  for(i in a1)
  	a2[i]=a1[i];
  id_array[+req.params.id]=a2;
  res.send(a2);
});

router.post('/:id', function(req, res, next) {
  console.log(req.body);
  var id=req.params.id;
  var msg=req.body.text;
  id_array[id].messages.push(msg);
  res.send(id.toString());
});

router.get('/:message/:id', function(req, res, next) {
  //console.log(req.params.id);
  var cid=req.params.id;
  var mid=req.params.message;
  //console.log(id_array[req.params.id]);
  res.send(id_array[cid].messages[mid]);
  });

module.exports = router;
