{
    up:{
        change_column:{
            table:"categories",
            columns:[
                {name:"slug", type:"boolean"}
            ]
        }
    },
    down:{
        change_column:{
            table:"categories",
            columns:[
                {name:"slug", type:"string"}
            ]
        }
    }
}