Template.admin.events({
    'submit #createDocente':function(e){
        e.preventDefault();
        var $form=$(e.currentTarget);
        var docente={
            nombre:$form.find('#docenteName').val(),
            apellido:$form.find('#docenteApellido').val(),
            email:$form.find('#docenteEmail').val(),
            password:$form.find('#docentePassword').val()
        };
        Meteor.call('createDocente',docente,function(err,res){
            console.log(err);
            console.log(res);
            if(!err){
                    alertify.success('Se creó el docente con ID '+res);
                    $('#createDocente')[0].reset();
                }else{
                    alertify.error(err);
                }
        });
    }
});
