Foros=new Mongo.Collection('foros');
Foros.permit(['insert','update']).apply();

Schema={};
Schema.Foro=new SimpleSchema({
    subject:{
        label:"Tema a Discutir",
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
    cursoId:{
        type:String
    },
    aQuienLeGusta:{
        type:[String],
        optional:true
    },
    quienHaComentado:{
        type:[String],
        optional:true        
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
Foros.attachSchema(Schema.Foro);

Foros.after.update(function(userId,doc,fieldNames,modifier,options){
    console.log(userId);
    console.log(doc);
    console.log(fieldNames);
    console.log(modifier);
    console.log(options);
    if(fieldNames.indexOf('aQuienLeGusta') > -1){
        if(Meteor.isServer){
            if(userId !== doc.createdBy){
            var emisor=Meteor.users.findOne({_id:userId});
            Notificaciones.insert({showTo:doc.createdBy,foroId:doc._id,noticia:'A '+emisor.profile.nombre+' '+emisor.profile.apellido+' le gusta tu Foro'});
            }
        }
    }
});
