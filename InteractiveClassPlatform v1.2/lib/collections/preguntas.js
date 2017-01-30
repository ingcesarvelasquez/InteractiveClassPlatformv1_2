Preguntas=new Mongo.Collection('preguntas');
Preguntas.permit(['insert','update']).apply();

Schema={};
Schema.Pregunta=new SimpleSchema({
    cuestionarioId:{
        label:"Nombre del Cuestionario",
        type:String,
        autoform:{
            firstOption:'--Seleccione un Cuestionario--',
            options:function(){
                return Cuestionarios.find({sent:false}).map(function(Cuestionarios){
                    return {label:Cuestionarios.title,value:Cuestionarios._id};
                });
            }
        }
    },
    pregunta:{
        label:"Pregunta",
        type:String,
        min:3,
        autoform:{
            value:'¿?'
        }
    },
    opcion1:{
        label:"Respuesta a)",
        type:String,
        max:500
    },
    opcion2:{
        label:"Respuesta b)",
        type:String,
        max:500
    },
    opcion3:{
        label:"Respuesta c)",
        type:String,
        max:500
    },
    opcion4:{
        label:"Respuesta d)",
        type:String,
        max:500
    },
    respuesta:{
        label:"La Respuesta correcta",
        type:Number,
        min:1,
        max:4,
        autoform:{
            firstOption:'--Seleccione--',
            options:[
                {label:'es a)',value:1},
                {label:'es b)',value:2},
                {label:'es c)',value:3},
                {label:'es d)',value:4}
            ]
        }
    },
    respondieron1:{
        type:Number,
        min:0,
        optional:true,
        autoValue:function(){
            if(this.isInsert){
                return 0;
            }            
        }
    },
    respondieron2:{
        type:Number,
        min:0,
        optional:true,
        autoValue:function(){
            if(this.isInsert){
                return 0;
            }            
        }        
    },
    respondieron3:{
        type:Number,
        min:0,
        optional:true,
        autoValue:function(){
            if(this.isInsert){
                return 0;
            }            
        }        
    },
    respondieron4:{
        type:Number,
        min:0,
        optional:true,
        autoValue:function(){
            if(this.isInsert){
                return 0;
            }            
        }        
    },
    hanRespondido:{
        type:[String],
        optional:true
    },
    respondieronBien:{
        type:Number,
        min:0,
        optional:true,
        autoValue:function(){
            if(this.isInsert){
                return 0;
            }            
        }        
    },
    respondieronMal:{
        type:Number,
        min:0,
        optional:true,
        autoValue:function(){
            if(this.isInsert){
                return 0;
            }            
        }        
    },
    enviar:{
        type:Boolean,
        autoValue:function(){
            if(this.isInsert){
                return false;
            }
        }
    },
    createdAt:{
        type:String,
        autoValue:function(){
            return new Date().toISOString();
        }
    }
});
Preguntas.attachSchema(Schema.Pregunta);
