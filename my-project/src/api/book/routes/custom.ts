'use strict';

module.exports = {
    routes: [{
        method: 'GET',
        path: '/books/:id/like',
        handler: 'book.like'
    }]
}