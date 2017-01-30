Template.curso.helpers({
    curso:function(){
        return Cursos.findOne({_id:Router.current().params._id});
    },
    foro:function(){
        return Foros.find({cursoId:Router.current().params._id},{sort:{createdAt:-1}});
    },
    cuestionario:function(){
        return Cuestionarios.find({});
    },
    fancyText:function(texto){
        if(!texto)return '---';
        return texto.substr(0,200)+'...';
    },
    material:function(string){
        if(!string)return;
        return JSON.parse(string);
    },
    materiales:function(){
        return Materiales.find({cursoId:Router.current().params._id},{sort:{createdAt:1}});
    }
});
