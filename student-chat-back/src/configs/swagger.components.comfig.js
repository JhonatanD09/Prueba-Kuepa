module.exports = {
    components: {
        schemas: {

            Login: {
                type: "object",
                properties: {
                    userName: { type: "string" },
                    password: { type: "string" }
                }
            },
            User: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    userName: { type: "string" },
                    rol: { type: "string" },
                    password: { type: "string" }
                    
                }
            },
            Message: {
                type: "object",
                properties: {
                    userName: { type: "string" },
                    message: { type: "string" },
                }
            },

            
        },
        securitySchemes: {
            jwt: {
                type: "http",
                scheme: "bearer",
                in: "header",
                bearerFormat: "JWT"
            },
        }
    }
};