import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Backend Final API",
      description: "API documentation for Users module",
      version: "1.0.0"
    }
  },

  apis: ["./src/routes/*.js"]
};

const specs = swaggerJSDoc(swaggerOptions);

export default specs;