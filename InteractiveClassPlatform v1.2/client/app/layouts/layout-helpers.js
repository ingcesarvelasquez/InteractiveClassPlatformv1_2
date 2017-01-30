Template.layout.helpers({
    formulario:function(){
        if(!Roles.userIsInRole(Meteor.user(),['admin']) && !Roles.userIsInRole(Meteor.user(),['docente'])){
            var pregunta=Preguntas.findOne({enviar:true,hanRespondido:{$ne:Meteor.userId()}});
            if(pregunta)var cuestionario=Cuestionarios.findOne({_id:pregunta.cuestionarioId});
            if(cuestionario)var curso=Cursos.findOne({_id:cuestionario.cursoId,matriculados:Meteor.userId()});
            if(curso){
                return {
                    pregunta:pregunta,
                    cuestionario:cuestionario,
                    curso:curso
                }
            }else{return;}
        }else{
            return
        }
    },
    notificacion:function(){
        return Notificaciones.find({showTo:Meteor.userId()},{sort:{createdAt:-1}});
    },
    notificacionCounter:function(){
        return Notificaciones.find({showTo:Meteor.userId(),seen:false}).count();
    }
});
