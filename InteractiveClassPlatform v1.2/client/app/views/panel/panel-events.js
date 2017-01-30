Template.panel.events({
    'click .btn-matricularse':function(e){
        e.preventDefault();
        if(true===confirm('¿Matricularse en este Curso?')){
            var cursoId=$(e.currentTarget).data('curso-id');
            Meteor.call('matricularse',cursoId,function(err,res){
                if(err){
                    alertify.error('No Puede Matricularse a este Curso');
                }else{
                    alertify.success('Se ha matriculado al curso');
                }
            });
        }
    }
});
