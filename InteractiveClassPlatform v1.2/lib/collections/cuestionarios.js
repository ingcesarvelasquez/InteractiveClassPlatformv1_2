Cuestionarios=new Mongo.Collection('cuestionarios');
Cuestionarios.permit(['insert','update']).apply();

Schema={};
Schema.Cuestionario=new SimpleSchema({
    cursoId:{
        type:String,
        label:"Curso al cual se refiere",
        autoform:{
            firstOption:'--Seleccione un Curso--',
            options:function(){
                return Cursos.find().map(function(Cursos){
                    return {label:Cursos.title,value:Cursos._id};
                });
            }
        }
    },
    title:{
        label:"Nombre del Cuestionario",
        type:String
    },
    description:{
        label:"Descripción del cuestionario (opcional)",
        type:String,
        max:500,
        optional:true,
        autoform:{
            rows:2
        }
    },
    createdAt:{
        type:String,
        autoValue:function(){
            return new Date().toISOString();
        }
    },
    createdBy:{
        type:String,
        autoValue:function(){
            return Meteor.userId();
        }
    },
    sent:{
        type:Boolean,
        autoValue:function(){
            if(this.isInsert){
            return false;
            }
        }
    }
});
Cuestionarios.attachSchema(Schema.Cuestionario);
