import express, { Request, Response } from "express";
import next from "next";
import expressSwagger from "express-swagger-generator";
import swaggerConfig from "../config/swagger-config";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
    try {


        await app.prepare();
        const server = express();
        // eslint-disable-next-line no-underscore-dangle
        expressSwagger(server)(swaggerConfig);
        server.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });
        server.listen(port, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();