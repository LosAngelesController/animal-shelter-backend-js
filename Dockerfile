# base image
FROM node:latest

# Create and change to the app directory.
WORKDIR /usr/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY . .

# Install production dependencies.

# If you add a package-lock.json, speed your build by switching to 'npm ci'.
RUN npm install --save-dev

# Copy local code to the container image.

RUN npm run build

#SHELL ["/bin/bash", "-c"]

#RUN curl -fsSL https://bun.sh/install | bash

#RUN source /root/.bashrc 

#RUN ~/.bun/bin/bun install

#RUN ls ~/.bun/bin/bun

RUN ls /usr/app

# Run the web service on container startup.
CMD [ "npm", "run", "cloudrunhttp" ]
#CMD ["/root/.bun/bin/bun", "/usr/app/src/djkenster.ts --port 8080 --nossl"]