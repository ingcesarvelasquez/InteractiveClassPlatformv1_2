Comentarios=new Mongo.Collection('comentarios');
Comentarios.permit(['insert','update']).apply();

Schema={};
Schema.Comentario=new SimpleSchema({
    texto:{
        label:"Comentario",
        type:String,
        max:1000
    },
    foroId:{
        type:String
    },
    createdBy:{
        type:String,
        label:"Creador",
        autoValue:function(){
            if(this.isInsert){
                return this.userId;
            }
        }
    },
    createdAt:{
        type:String,
        autoValue:function(){
            if(this.isInsert){
                return new Date().toISOString();
            }
        }
    }
});
Comentarios.attachSchema(Schema.Comentario);

Comentarios.after.insert(function(userId,doc){
    var commented=Foros.find({_id:doc.foroId}).count();
    if(commented===0){
        Foros.update({_id:doc.foroId},{$push:{quienHaComentado:userId}});
    }
    if(Meteor.isServer){
        var emisor=Meteor.users.findOne({_id:userId});
        var foro=Foros.findOne({_id:doc.foroId});
        if(userId !== foro.createdBy){
        Notificaciones.insert({showTo:foro.createdBy,foroId:doc.foroId,noticia:emisor.profile.nombre+' '+emisor.profile.apellido+' comentó en tu Foro'});
        }
    }
});
