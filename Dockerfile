################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

COPY tsconfig.json ./

COPY ./src ./src
COPY ./public ./public

RUN npm install --legacy-peer-deps \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules

EXPOSE 3000

CMD [ "serve", "-s", "build" ]
