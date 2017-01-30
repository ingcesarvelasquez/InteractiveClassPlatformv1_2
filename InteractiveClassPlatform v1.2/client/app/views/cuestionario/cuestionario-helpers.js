Template.cuestionario.helpers({
    cuestionario:function(){
        return Cuestionarios.findOne({_id:Router.current().params._id});
    },
    cuestion:function(){
        return Preguntas.find({cuestionarioId:Router.current().params._id}).map(function(Preguntas){
            Preguntas.cakeId='cake-'+Preguntas._id;
            Preguntas.barrasId='barras-'+Preguntas._id;
            return Preguntas;
        });
    },
    genCake:function(preguntaId){
        var pregunta=Preguntas.findOne({_id:preguntaId});
        return {
            cakeId:'cake-'+preguntaId,
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Estadísticas de '+pregunta.pregunta
            },
            subtitle: {
                text: 'Distribución de Respuestas'
            },
            xAxis: {
                type: 'Respuestas'
            },
            yAxis: {
                title: {
                    text: 'Cantidad'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '{point.name}: <b>{point.y}</b> del total<br/>'
            },
            series: [{
                name: "Respuestas",
                colorByPoint: true,
                data: [{
                    name: "Aciertos",
                    y: pregunta.respondieronBien
                }, {
                    name: "Errores",
                    y: pregunta.respondieronMal
                }]
            }]
        }
    },
    genBarras:function(preguntaId){
    var pregunta=Preguntas.findOne({_id:preguntaId});
    return {
        barrasId:'barras-'+preguntaId,
        chart: {
            type: 'column'
        },
        title: {
            text: 'Estadísticas de '+pregunta.pregunta
        },
        subtitle: {
            text: 'Distribución de Respuestas'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Cantidad'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '{point.name}: <b>{point.y}</b> del total<br/>'
        },
        series: [{
            name: "Respuestas",
            colorByPoint: true,
            data: [{
                name: "Aciertos",
                y: pregunta.respondieronBien
            }, {
                name: "Errores",
                y: pregunta.respondieronMal
            }, {
                name: "Respondieron a)",
                y: pregunta.respondieron1
            }, {
                name: "Respondieron b)",
                y: pregunta.respondieron2
            }, {
                name: "Respondieron c)",
                y: pregunta.respondieron3
            }, {
                name: "Respondieron d)",
                y: pregunta.respondieron4
            }]
        }]
    }
}
});
