{
    up:{
        create_table:{
            name:'FirstTable',
            columns:[
                {name:'name', type:'string'},
                {name:'description', type:'text'},
                {name:'price',type:'money'}
             ],
            timestamps:true
         }
    }
}