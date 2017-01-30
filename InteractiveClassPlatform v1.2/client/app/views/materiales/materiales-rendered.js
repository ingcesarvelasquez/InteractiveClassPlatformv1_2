Template.materiales.rendered=function(){
    $(".add-attachment").filestyle({
    input:false,
    buttonText:"&nbsp;Agregar Material",
    buttonName:"btn-warning",
    badge:false
    });
Session.set('extraAttachments',[]);
}
