import express, { Router } from 'express';

import { indexUsers } from './controllers/users';

const router = Router();
	
router.route('/users.json')
	.get(indexUsers);

router.get('/users.json', function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
    connection.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], function(err, row, fields){
        if (err) console.log(err);
        if (row.length > 0) {
            res.send({'success': true, 'message': row[0].username});
        } else {
            res.send({'success': false, 'message': 'User not found, please try again'});
        }
    });
});
	
export default router;