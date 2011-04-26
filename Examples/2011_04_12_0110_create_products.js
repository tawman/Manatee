{
    up:{
        create_table:{
            name:"products",
            columns:[
                {name:"title", type:"string"},
                {name:"description", type:"string"},
                {name:"price", type:"money"}
             ]
         },
         execute:"INSERT INTO products(title,description,price) VALUES('test','lorem ipsum',12.00);"

    },
    down:{
        drop_table:"products"
    }
}