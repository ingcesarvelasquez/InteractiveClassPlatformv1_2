Cursos=new Mongo.Collection('cursos');
Cursos.permit(['insert','update']).apply();

Schema={};
Schema.Curso=new SimpleSchema({
    title:{
        label:"Título",
        type:String
    },
    description:{
        label:"Descripción del curso (opcional)",
        optional:true,
        type:String,
        max:500,
        autoform:{
            rows:2
        }
    },
    docenteId:{
        type:String,
        label:"Docente ID",
        autoValue:function(){
            if(this.isInsert){
                return this.userId;
            }
        }
    },
    attachments:{
        type:String,
        label:"Material",
        optional:true
    },
    matriculados:{
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
Cursos.attachSchema(Schema.Curso);
