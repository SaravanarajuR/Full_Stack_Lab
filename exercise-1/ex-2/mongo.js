db.createCollection(
    "info",
    {validator:
        {$jsonSchema:
            {bsonType:'object',
                properties:
                    {name:
                        {bsonType:'string'}
                        ,DOB:{bsonType:'date'}
                        ,Gender:{bsonType:'string'}
                        ,DOA:{bsonType:'date'}
                        ,BCODE:{bsonType:'number'}
                    }}}})