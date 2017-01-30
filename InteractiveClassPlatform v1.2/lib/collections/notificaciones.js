Notificaciones=new Mongo.Collection('notificaciones');
Notificaciones.permit(['insert','update']).apply();

Schema={};
Schema.Notificacion=new SimpleSchema({
    showTo:{
        type:String
    },
    noticia:{
        type:String,
        max:50
    },
    foroId:{
        type:String
    },
    createdAt:{
        type:String,
        autoValue:function(){
            if(this.isInsert){
                return new Date().toISOString();
            }
        }
    },
    seen:{
        type:Boolean,
        autoValue:function(){
            if(this.isInsert){
                return false;
            }
        }
    }
});
Notificaciones.attachSchema(Schema.Notificacion);
