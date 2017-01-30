var hooksObject={
	before:{
		insert:function(doc){
			this.result(doc);
		}
	},
	beginSubmit: function(){
	},
	endSubmit: function(){
	},
	onSuccess:function(formType,result){
        Session.set('extraAttachments',[]);
	}
};
AutoForm.addHooks(['insertMaterialForm'],hooksObject);
