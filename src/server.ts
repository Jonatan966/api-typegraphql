import "reflect-metadata";
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import {ApolloServer} from 'apollo-server';

import CategoryResolver from "./graphql/category/CategoryResolver";
import VideoResolver from "./graphql/video/VideoResolver";

dotenv.config();

import './utils/connection';

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [CategoryResolver, VideoResolver],
    });

    const server = new ApolloServer({schema});

    server.listen({port: 4100}, () => console.log('Running'));
}

bootstrap();