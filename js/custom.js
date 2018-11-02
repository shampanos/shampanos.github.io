$(document).ready(function(){

    router = new Navigo(null, true, '?');
    router.on('/category/:id/', function (params) {
        $('#' + params.id).modal('show')
    });
    router.resolve();

});