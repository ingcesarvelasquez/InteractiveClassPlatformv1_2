Template.foro.events({
    'click .btn-like':function(e){
        e.preventDefault();
        var foroId=Router.current().params._id;
        Meteor.call('meGusta',foroId);
    }
});
