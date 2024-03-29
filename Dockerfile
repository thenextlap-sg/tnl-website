FROM node:14-alpine3.14

WORKDIR /app

# Setup Environment Variables
COPY . .

# Install Node packages 
RUN npm i

# Install serve
RUN npm install -g serve

# Build Frontend
RUN npm run build

# Run the web service on container startup.
EXPOSE 3000
CMD [ "serve", "-s", "build" ]