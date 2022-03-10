# Api_Open
API OPEN 

#INSTRUCTION 
LAUNCH API IN PORT 1337

The main URL:
http://localhost:1337/

The  URL TO GET PLAYERS LIST USING GET
http://localhost:1337/api/v1/players

The  URL TO GET PLAYER By id: USING GET 
http://localhost:1337/api/v1/players/{id}


The  URL TO INSERT Player PLAYER USING POST
http://localhost:1337/api/v1/players/

PLAYER SCHEMAS :
    {
        "id": int,
        "firstName":string,
        "secondName": string
        "age": int ,
        "tshirtsNumber":string
    }



The  URL TO UPDATE Player PLAYER USING PUT 
http://localhost:1337/api/v1/players/{id}


The  URL TO DELETE Player PLAYER USING DELETE 
http://localhost:1337/api/v1/players/{id}