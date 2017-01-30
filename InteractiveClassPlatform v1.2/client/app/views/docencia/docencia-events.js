Template.docencia.events({
    'change .add-attachment':function(e,template){
        var files;
        files=e.currentTarget.files;
        template.uploading.set(true);
        return Cloudinary.upload(files,{
        folder:Meteor.userId()
        },function(err,res){
            template.uploading.set(false);
            if(!err){
                var newAttachment={
                    format:res.format,
                    url:res.secure_url
                };
                var attachments=[];
                attachments=Session.get('attachments');
                attachments.push(newAttachment);
                Session.set('attachments',attachments);
            }
        });
    },
    'click .btn-enviar-cuestionario':function(e){
        e.preventDefault();
        var cuestionarioId=$(e.currentTarget).data('cuestionario-id');
        Meteor.call('enviarCuestionario',cuestionarioId);
    }  
});
