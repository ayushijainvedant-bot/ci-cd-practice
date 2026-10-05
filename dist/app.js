import express from "express";
const app = express();
const test = 123;
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "CI/CD practice API is running",
    });
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
