
export class MyResponse{

    // success response with optional data
    static send200(res, data){
        res.statusCode = 200

        if(data)
            res.json(data)
        else
            res.end()
    }

    // error response with custom error code
    static send400(res, message, errorCode){
        res.statusCode = 400
        res.statusMessage = message
        res.json({errorCode})
    }

    // If authToken not valid or authToken missing
    static send401(res){
        res.statusCode = 401
        res.statusMessage = "authToken missing or invalid"
        res.end()
    }

    // Error response for missing required body or data from client
    static send402(res){
        res.statusCode = 402
        res.statusMessage = "Missing required data"
        res.end()
    }
}