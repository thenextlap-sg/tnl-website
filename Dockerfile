FROM node:14-alpine3.14

WORKDIR /app

# Setup Environment Variables
COPY . .

# Install Node packages 
RUN npm i

# Build Frontend
RUN npm run build