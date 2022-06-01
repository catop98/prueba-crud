const app = new Vue({

    el:'#app',
    data: {
        titulo: 'Encuesta ',
        tareas: [],
        nuevaTarea:''
    },

    methods:{
        agregarTarea: function(){
           
           this.tareas.push({
               nombre: this.nuevaTarea,
               estado: false
           });
            this.nuevaTarea = '';
            localStorage.setItem('encuesta-local', JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
            this.tareas[index].estado = true;
            localStorage.setItem('encuesta-local', JSON.stringify(this.tareas));
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('encuesta-local', JSON.stringify(this.tareas));
        }
    },

    create: function(){
        let datosDb = JSON.parse(localStorage.getItem('encuesta-local'));
        if(datosDb === null){
            this.tareas = [];
        }else{
            this.tareas = datosDb;
        }
    }

});