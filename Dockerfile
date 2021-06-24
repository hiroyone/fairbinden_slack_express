# Two Stage Build: https://cloudnweb.dev/2019/09/building-a-production-ready-node-js-app-with-typescript-and-docker/

# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-slim

# Create and change to the app directory.
WORKDIR /usr/src/app
# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./
COPY tsconfig.json ./
# Install dependencies.
RUN npm install
# Copy local code to the container image.
COPY . ./
# Run the web service on container startup.
RUN npm run build
RUN ls -a

## this is stage two , where the app actually runs
FROM node:12-slim
# Create and change to the app directory.
WORKDIR /usr/src/app
# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./
# Install production dependencies.
RUN npm install --only=production
COPY --from=0 /usr/src/app .

# Install PM2 for multi-processing
RUN npm install pm2 -g

# Run the web service on container startup.
CMD [ "pm2-runtime", "npm", "--", "start" ]
