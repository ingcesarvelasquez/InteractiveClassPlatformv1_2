Template.panel.helpers({
    curso:function(){
        return Cursos.find({matriculados:{$ne:Meteor.userId()}});
    },
    matriculado:function(){
        return Cursos.find({matriculados:Meteor.userId()});
    },
    fancyText:function(texto){
        if(!texto)return '---';
        return texto.substr(0,200)+'...';
    }
});
