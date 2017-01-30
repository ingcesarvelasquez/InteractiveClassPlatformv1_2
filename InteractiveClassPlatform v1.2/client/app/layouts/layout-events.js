Template.layout.events({
    'click .notificacion-link':function(e){
        var id=$(e.currentTarget).data('notificacion-id');
        Meteor.call('seen',id);
    }
});
