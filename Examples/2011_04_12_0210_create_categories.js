{
    up:{
        create_table:{
            name:"categories",
            timestamps:true,
            columns:[
                {name:"title", type:"string"},
                {name:"description", type:"string"}
             ]
         }
    },
    down:{
        drop_table:"categories"
    }
}