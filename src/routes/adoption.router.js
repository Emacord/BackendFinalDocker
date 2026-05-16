import { Router } from "express";

const router = Router();

let adoptions = [];



// GET all
router.get("/", (req, res) => {

  res.status(200).json({
    status: "success",
    payload: adoptions
  });

});



// GET by ID
router.get("/:id", (req, res) => {

  const adoption = adoptions.find(
    a => a.id === parseInt(req.params.id)
  );

  if (!adoption) {
    return res.status(404).json({
      status: "error",
      message: "Adoption not found"
    });
  }

  res.status(200).json({
    status: "success",
    payload: adoption
  });

});



// POST
router.post("/", (req, res) => {

  const { pet, owner } = req.body;

  if (!pet || !owner) {
    return res.status(400).json({
      status: "error",
      message: "Missing data"
    });
  }

  const newAdoption = {
    id: adoptions.length + 1,
    pet,
    owner
  };

  adoptions.push(newAdoption);

  res.status(201).json({
    status: "success",
    payload: newAdoption
  });

});



export default router;