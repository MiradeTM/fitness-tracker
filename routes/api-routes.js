const express = require("express");
const router = express.Router();
const Workout = require("../models/workout.js")

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err)
        })
});

router.put("/api/workouts/:id", async (req, res) => {
    try {
        const dbWorkout = await Workout.findOneAndUpdate({ _id: req.params.id}, {$push: {
            exercises: req.body
        }})
        res.json(dbWorkout)
    } catch (err) {
        res.json(err)
    }

});

router.post("/api/workouts", async (req, res) => {
    console.log("workouts hit!")
    try {
        const dbWorkout = await Workout.create(req.body)
        res.json(dbWorkout)
    } catch (err) {
        res.json(err)
    }
});


router.get("/api/workouts/range", async (req, res) => {
    try {
        const dbWorkout = await Workout.find({})
        res.json(dbWorkout)
    } catch (err) {
        res.json(err)
    }

});

module.exports = router;