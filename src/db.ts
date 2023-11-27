const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
export const connectionSrt = `mongodb+srv://${username}:${password}@cluster0.fffgi7z.mongodb.net/productDB?retryWrites=true&w=majority`;
