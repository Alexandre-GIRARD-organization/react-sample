import { createServer, Model, Response } from "miragejs"
import { wolverine, wonderMan, ironMan } from "./characters"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            character: Model,
        },

        seeds(server) {
            server.create("character", wolverine)
            server.create("character", wonderMan)
            server.create("character", ironMan)
            
        },

        routes() {
            this.urlPrefix = process.env.REACT_APP_MARVEL_API_URI;
            //this.namespace = "api"

            this.get("/characters", (schema, request) => {
                let res = schema.characters.all();

                if(res){
                    return new Response(200, {}, {data : { results: res.models}});
                }else{
                    return new Response(404, { some: 'header' }, {"status": "We couldn't find that character"});
                }
            })

            this.get("/characters/:id", (schema, request) => {
                let id = request.params.id

                let res = schema.characters.find(id);
                if(res){
                    return new Response(200, {}, {data : {results: [res]}});
                }else{
                    return new Response(404, { some: 'header' }, {"status": "We couldn't find that character"});
                }
                
                //return schema.characters.find(id)
            })

            
        },
    })

    return server
}
