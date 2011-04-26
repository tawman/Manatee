{
    up:{
        create_table:{
            name:"tags",
            timestamps:true,
            columns:[
                {name:"name", type:"nvarchar(50)"}
             ]
         }
    },
    down:{
        drop_table:"tags"
    }
}