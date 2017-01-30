Router.map(function(){
    this.route('ingresar',{
        name:'ingresar',
        path:'/ingresar',
        template:'ingresar'
    });
    this.route('admin',{
        name:'admin',
        path:'/admin',
        template:'admin'
    });
    this.route('docencia',{
        name:'docencia',
        path:'/docencia',
        template:'docencia'
    });
    this.route('panel',{
        name:'panel',
        path:'/panel',
        template:'panel'
    });
    this.route('inicio',{
        name:'inicio',
        path:'/',
        template:'inicio'
    });
    this.route('curso',{
        name:'curso',
        path:'curso/:_id',
        template:'curso'
    });
    this.route('estadisticas',{
        name:'estadisticas',
        path:'estadisticas/:_id',
        template:'estadisticas'
    });
    this.route('cursoBread',{
        name:'cursoBread',
        path:'curso/:cursoId',
        template:'curso'
    });
    this.route('foro',{
        name:'foro',
        path:'foro/:_id',
        template:'foro'
    });
    this.route('foroLink',{
        name:'foroLink',
        path:'foro/:foroId',
        template:'foro'
    });
    this.route('cuestionario',{
        name:'cuestionario',
        path:'cuestionario/:_id',
        template:'cuestionario'
    });
    this.route('materiales',{
        name:'materiales',
        path:'materiales/:_id',
        template:'materiales'
    });
});