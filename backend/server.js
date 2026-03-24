const app = require("./src/app")
const mongoConnect = require("./src/config/db")

mongoConnect()

app.listen(3000, () => {
    console.log("server is running on 3000");
})