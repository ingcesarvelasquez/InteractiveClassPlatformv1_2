Router.configure({
    layoutTemplate:'layout',
    waitOn:function(){
        return [
			Meteor.subscribe('users'),
            Meteor.subscribe('cursos'),
            Meteor.subscribe('cuestionarios'),
            Meteor.subscribe('preguntas'),
            Meteor.subscribe('respuestas'),
            Meteor.subscribe('foros'),
            Meteor.subscribe('notificaciones'),
            Meteor.subscribe('comentarios'),
            Meteor.subscribe('materiales')
        ]
    }
});

var mustBeSignedIn=function(){
    if(!(Meteor.user() || Meteor.loggingIn())){
        Router.go('ingresar');
    }else{
        this.next();
    }
}
Router.onBeforeAction(mustBeSignedIn,{except:['ingresar','inicio']});

var goToPanel=function(){
	if(Meteor.userId()){
        if(Roles.userIsInRole(Meteor.userId(),['admin'])){
            Router.go('admin');
        }else if(Roles.userIsInRole(Meteor.userId(),['docente'])){
            Router.go('docencia');
        }else{
            Router.go('panel');
        }
	}else{
		this.next();
	}
}
Router.onBeforeAction(goToPanel,{only:['ingresar']});

var restrictedAdmin=function(){
	if(Roles.userIsInRole(Meteor.userId(),['admin'])){
		this.next();
	}else if(Roles.userIsInRole(Meteor.userId(),['docente'])){
		Router.go('docencia');
	}else{
        Router.go('panel');
    }
}
Router.onBeforeAction(restrictedAdmin,{only:['admin']});

var restrictedDocencia=function(){
	if(Roles.userIsInRole(Meteor.userId(),['docente'])){
		this.next();
	}else if(Roles.userIsInRole(Meteor.userId(),['admin'])){
        Router.go('admin');
	}else{
        Router.go('panel');
    }
}
Router.onBeforeAction(restrictedDocencia,{only:['docencia']});

var restrictedPanel=function(){
if(!Roles.userIsInRole(Meteor.userId(),['docente']) && !Roles.userIsInRole(Meteor.userId(),['admin'])){
		this.next();
	}else if(Roles.userIsInRole(Meteor.userId(),['admin'])){
        Router.go('admin');
	}else{
        Router.go('docencia');
    }
}
Router.onBeforeAction(restrictedPanel,{only:['panel']});
