const express = require('express')
const app = express()
const qoutes = [
    "Strive for at least 150 minute of exercise per week",
    "Cut your coffee calories",
    "keep a fitness journal",
    "Avoid processed foods",
    "Drink lots of water",
    "Set perfectionism aside",
    "Recovery breaks are important too",
    "Keep healthy snacks on hand",
    "Follow the 80/20 rule",
    "Don't just focus on the scale",
    "Find an accountability partner",
    "Try working out in the morning",
    "Display your results",
    "Two pounds at a time",
    "Eat smaller portions",
    "Use gym-wear as motivation",
    "Eat slowly",
    "Swap bad habbits with good ones",
    "Make fitness a top priority",
    "Don't skip multiple workouts"
]
app.get('/',(req,res)=>res.json(
    {qoute:qoutes[qoutes.length * Math.random() | 0]}
))

app.listen(3000,console.log("api fired"));