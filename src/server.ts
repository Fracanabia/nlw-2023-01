import cors from "@fastify/cors";
import Fastify from "fastify";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);

app.register(appRoutes);

app
  .listen({
    host: "192.168.3.4",
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running!");
  });
