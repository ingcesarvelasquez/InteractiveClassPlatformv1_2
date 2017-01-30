Respuestas=new Mongo.Collection('respuestas');
Respuestas.permit(['insert','update']).apply();

Schema={};
Schema.Respuesta=new SimpleSchema({
    estudianteId:{
        label:"Estudiante ID",
        type:String,
        autoValue:function(){
            return Meteor.userId();
        }
    },
    preguntaId:{
        label:"Pregunta ID",
        type:String
    },
    respuesta:{
        label:"Respuesta",
        type:Number,
        min:1,
        max:4,
        autoform:{
            type:'select-radio',
            options:function(){
                var pregunta=Preguntas.findOne({enviar:true,hanRespondido:{$ne:Meteor.userId()}});
                return [
                    {label:'a) '+pregunta.opcion1,value:1},
                    {label:'b) '+pregunta.opcion2,value:2},
                    {label:'c) '+pregunta.opcion3,value:3},
                    {label:'d) '+pregunta.opcion4,value:4}
                ]
            }
        }
    },
    esCorrecta:{
        type:Boolean,
        optional:true
    },
    createdAt:{
        type:String,
        autoValue:function(){
            return new Date().toISOString();
        }
    }
});
Respuestas.attachSchema(Schema.Respuesta);

Respuestas.after.insert(function(userId,doc){
    
var pregunta=Preguntas.findOne({_id:doc.preguntaId});
var respuestaDocente=pregunta.respuesta;
var respuestaAlumno=doc.respuesta;

Preguntas.update({_id:doc.preguntaId},{$push:{hanRespondido:userId}});

console.log(respuestaDocente);
console.log(respuestaAlumno);

    if(Meteor.isServer){
        if(respuestaAlumno===1)Preguntas.update({_id:doc.preguntaId},{$inc:{respondieron1:1}});
        if(respuestaAlumno===2)Preguntas.update({_id:doc.preguntaId},{$inc:{respondieron2:1}});
        if(respuestaAlumno===3)Preguntas.update({_id:doc.preguntaId},{$inc:{respondieron3:1}});
        if(respuestaAlumno===4)Preguntas.update({_id:doc.preguntaId},{$inc:{respondieron4:1}});
    }

    if(respuestaDocente === respuestaAlumno){
        Respuestas.update({_id:doc._id},{$set:{esCorrecta:true}});
        if(Meteor.isServer){
        Preguntas.update({_id:doc.preguntaId},{$inc:{respondieronBien:1}});
        console.log('respuesta correcta');
        }
    }else{
        Respuestas.update({_id:doc._id},{$set:{esCorrecta:false}});
        if(Meteor.isServer){
        Preguntas.update({_id:doc.preguntaId},{$inc:{respondieronMal:1}});
        console.log('respuesta incorrecta');
        }
    }
});
