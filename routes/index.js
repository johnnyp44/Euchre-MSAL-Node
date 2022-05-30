/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'EuchreStats',
        isAuthenticated: req.session.isAuthenticated,
        username: req.session.account?.username,
        fullName: req.session.account?.name,
    });
});

module.exports = router;