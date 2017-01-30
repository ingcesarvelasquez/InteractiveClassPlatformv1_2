Template.docencia.helpers({
    curso:function(){
        return Cursos.find({docenteId:Meteor.userId()},{sort:{createdAt:-1}}).map(function(Cursos){
            var matriculas=[];
            matriculas=Cursos.matriculados;
            if(!matriculas)return Cursos;
            Cursos.matriculas=matriculas.length;
            return Cursos;
        });
    },
    fancyText:function(texto){
        if(!texto)return '---';
        return texto.substr(0,200)+'...';
    },
    attachmentsString:function(){
        return JSON.stringify(Session.get('attachments'));
    },
    uploading:function(){
        return Template.instance().uploading.get();
    },
    attachment:function(){
        if(!Session.get('attachments'))return null;
        return Session.get('attachments');
    },
    cuestionario:function(){
        return Cuestionarios.find({}).map(function(Cuestionarios){
            var numPreguntas=Preguntas.find({cuestionarioId:Cuestionarios._id}).count();
            Cuestionarios.numPreguntas=numPreguntas;
            return Cuestionarios;
        });
    }
});
