const express = require("express");
const users = require('./MOCK_DATA.json');
const app = express();
const PORT = 8000;

// ROUTES
app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});
//rest api
app.get("/api/users", (req, res) => {
    return res.json(users);
});
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
