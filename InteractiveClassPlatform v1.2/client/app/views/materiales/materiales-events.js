Template.materiales.events({
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
                attachments=Session.get('extraAttachments');
                attachments.push(newAttachment);
                Session.set('extraAttachments',attachments);
            }
        });
    }    
});
