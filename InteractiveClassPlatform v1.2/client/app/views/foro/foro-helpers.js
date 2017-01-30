Template.foro.helpers({
    foro:function(){
        return Foros.find({_id:Router.current().params._id}).map(function(Foros){
            var likes=[];
            likes=Foros.aQuienLeGusta;
            if(likes){
            Foros.meGusta=false;
            if(likes.indexOf(Meteor.userId()) > -1)Foros.meGusta=true;
            Foros.likesTotal=likes.length;
            }else{Foros.likesTotal=0;}
            var creador=Meteor.users.findOne({_id:Foros.createdBy});
            Foros.creador=creador.profile.nombre+' '+creador.profile.apellido;
            return Foros;
        });
    },
    comentario:function(){
        return Comentarios.find({foroId:Router.current().params._id},{sort:{createdAt:-1}}).map(function(Comentarios){
            var usuario=Meteor.users.findOne({_id:Comentarios.createdBy});
            if(!usuario)return Comentarios;
            Comentarios.usuario=usuario.profile.nombre+' '+usuario.profile.apellido;
            return Comentarios;
        });
    },
    foroId:function(){
        return Router.current().params._id;
    },
    participacion:function(){
        var datos=[];
        var usuarios=[];
        var cursor=Comentarios.find({foroId:Router.current().params._id});
        cursor.forEach(function(comentario){
        var userId=comentario.createdBy;
            if(usuarios.indexOf(userId) === -1){
                usuarios.push(userId);
            }
        });
        usuarios.forEach(function(usuario){
            var user=Meteor.users.findOne({_id:usuario});
            var dato={user:user.profile.nombre+' '+user.profile.apellido,eventos:Comentarios.find({createdBy:usuario}).count()};
            datos.push(dato);
        });
        return datos;
    }
});
