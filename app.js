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
        }
    }

});