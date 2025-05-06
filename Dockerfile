# Use official Node.js LTS version
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port Nuxt uses (default 3000)
EXPOSE 3000

# Start Nuxt in development mode
CMD ["npm", "run", "dev"]               