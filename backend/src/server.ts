import app from "./app"
import "dotenv/config"

const PORT = process.env.APP_PORT || 3333

app.listen(PORT, () => {
    console.log("\u001b[34m Server escutando em: "+PORT)
})