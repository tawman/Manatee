{
    up:{
        add_column:{
            table:"categories",
            columns:[
                {name:"slug", type:"string"}
            ]
        }
    },
    down:{
        remove_column:{
            table:"categories",
            name: "slug"
        }
    }
}