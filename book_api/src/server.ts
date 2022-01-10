import express from "express";
import config from "config";
import log from "./logger";
import connect from "./db/connect";
import cors from "cors"
const port = config.get("port") as number;
const host = config.get("host") as string;

import BookRoutes from "./routes/bookRoutes"
import AuthorRoutes from "./routes/authorRoutes"
import LibrarianRoutes from "./routes/librarianRoutes"
import PublishingHouseRoutes from "./routes/publishingHouseRoutes"
import BorrowedTicketRoutes from "./routes/borrowedTicketRoutes"

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())
app.listen(port, host, () => {
    log.info(`Server listing at http://${host}:${port}`);
    connect();
    app.use("/api/products", BookRoutes)
    app.use("/api/authors", AuthorRoutes)
    app.use("/api/librarians", LibrarianRoutes)
    app.use("/api/publishing_houses", PublishingHouseRoutes)
    app.use("/api/borrowed_ticketes", BorrowedTicketRoutes)
});