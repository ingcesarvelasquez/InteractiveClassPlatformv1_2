Template.materiales.helpers({
    curso:function(){
        return Cursos.find({_id:Router.current().params._id});
    },
    attachment:function(){
        if(!Session.get('extraAttachments'))return null;
        return Session.get('extraAttachments');
    },
    attachmentsString:function(){
        return JSON.stringify(Session.get('extraAttachments'));
    },
    uploading:function(){
        return Template.instance().uploading.get();
    },
    material:function(){
        return Materiales.find({cursoId:Router.current().params._id},{sort:{createdAt:-1}});
    },
    materialString:function(string){
        if(!string)return;
        return JSON.parse(string);
    }
});
