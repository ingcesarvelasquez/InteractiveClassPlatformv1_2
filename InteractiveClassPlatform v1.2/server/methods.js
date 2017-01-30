Meteor.methods({
    'createDocente':function(docente){
        console.log(docente);
        var profile={
            nombre:docente.nombre,
            apellido:docente.apellido
        };
        var options={
            email:docente.email,
            password:docente.password,
            profile:profile
        };
        var loggedInUser=Meteor.user();
        if(Roles.userIsInRole(loggedInUser,['admin'])){
            var docenteId=Accounts.createUser(options);
            Roles.addUsersToRoles(docenteId,['docente']);
            return docenteId;
        }
        throw new Meteor.Error(403, "No Autorizado para crear docentes");
    },
    'matricularse':function(cursoId){
        var loggedInUser=Meteor.user();
        var exists=Cursos.find({_id:cursoId,matriculados:Meteor.userId()}).count();
        if(!Roles.userIsInRole(loggedInUser,['admin']) && !Roles.userIsInRole(loggedInUser,['docente'])){
            if(exists===0){
                return Cursos.update({_id:cursoId},{$push:{matriculados:Meteor.userId()}},function(err){
                    return 'Se ha matriculado al Curso';
                });
            }else{
                throw new Meteor.Error(403, "Ya esta matriculado en este curso");    
            }
        }
        throw new Meteor.Error(403, "No se puede matricular a este curso");    
    },
    'meGusta':function(foroId){
        var liked=Foros.find({_id:foroId,'aQuienLeGusta':this.userId}).count();
        if(liked===0){
        return Foros.update({_id:foroId},{$push:{'aQuienLeGusta':this.userId}});
        }else{
        throw new Meteor.Error('403','ya has dado like');
        }
    },
    'enviarCuestionario':function(cuestionarioId){
        if(!cuestionarioId)throw new Meteor.Error(403,"Se Requiere un Cuestionario");    
        Preguntas.update({cuestionarioId:cuestionarioId,enviar:false},{$set:{enviar:true}},{multi:true});
        return Cuestionarios.update({_id:cuestionarioId},{$set:{sent:true}});
    },
    'seen':function(notificacionId){
        Notificaciones.update({_id:notificacionId},{$set:{seen:true}});
    }
});
