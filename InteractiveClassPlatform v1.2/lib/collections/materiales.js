Materiales=new Mongo.Collection('materiales');
Materiales.permit(['insert','update']).apply();

Schema={};
Schema.Material=new SimpleSchema({
    cursoId:{
        type:String
    },
    attachments:{
        type:String,
        label:"Material",
        min:10
    },
    notes:{
        type:String,
        label:"Notas Adicionales (opcional)",
        min:1,
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
Materiales.attachSchema(Schema.Material);
