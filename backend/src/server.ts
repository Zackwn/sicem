import app from "./app"
import "dotenv/config"

// 3333
app.listen(process.env.APP_PORT, () => {
    console.log("\u001b[34m Server escutando em: "+process.env.APP_PORT)
})