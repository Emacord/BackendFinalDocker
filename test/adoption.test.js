import request from "supertest";
import app from "../src/app.js";

describe("Adoption Router Functional Tests", () => {

  test("GET /api/adoptions debe devolver todas las adopciones", async () => {

    const response = await request(app)
      .get("/api/adoptions");

    expect(response.statusCode).toBe(200);

    expect(response.body).toHaveProperty("status");

    expect(response.body.status).toBe("success");

    expect(Array.isArray(response.body.payload)).toBe(true);

  });



  test("POST /api/adoptions debe crear una adopción", async () => {

    const adoptionMock = {
      pet: "Dog",
      owner: "Ema"
    };

    const response = await request(app)
      .post("/api/adoptions")
      .send(adoptionMock);

    expect(response.statusCode).toBe(201);

    expect(response.body.payload).toHaveProperty("id");

    expect(response.body.payload.pet).toBe("Dog");

  });



  test("POST /api/adoptions debe devolver error si faltan datos", async () => {

    const incompleteAdoption = {
      pet: "Dog"
    };

    const response = await request(app)
      .post("/api/adoptions")
      .send(incompleteAdoption);

    expect(response.statusCode).toBe(400);

    expect(response.body.status).toBe("error");

  });



  test("GET /api/adoptions/:id debe devolver error si no existe", async () => {

    const response = await request(app)
      .get("/api/adoptions/999");

    expect(response.statusCode).toBe(404);

    expect(response.body.status).toBe("error");

  });

});