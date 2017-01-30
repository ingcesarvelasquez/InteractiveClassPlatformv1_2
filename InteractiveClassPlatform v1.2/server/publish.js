Meteor.publish('users',function(){
if(!this.userId)return this.ready();
return Meteor.users.find({},{fields:{profile:1,username:1,emails:1,roles:1}});
});
Meteor.publish('cursos',function(){
if(!this.userId)return this.ready();
return Cursos.find({});
});
Meteor.publish('cuestionarios',function(){
if(!this.userId)return this.ready();
return Cuestionarios.find({});
});
Meteor.publish('preguntas',function(){
if(!this.userId)return this.ready();
return Preguntas.find({});
});
Meteor.publish('respuestas',function(){
if(!this.userId)return this.ready();
return Respuestas.find({});
});
Meteor.publish('foros',function(){
if(!this.userId)return this.ready();
return Foros.find({});
});
Meteor.publish('comentarios',function(){
if(!this.userId)return this.ready();
return Comentarios.find({});
});
Meteor.publish('notificaciones',function(){
if(!this.userId)return this.ready();
return Notificaciones.find({});
});
Meteor.publish('materiales',function(){
if(!this.userId)return this.ready();
return Materiales.find({});
});
