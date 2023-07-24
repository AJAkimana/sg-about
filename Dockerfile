# Use the official Node.js image as the base image with the specific Node.js version
FROM node:18.9.0

# Install pnpm with the specific pnpm version
RUN npm install -g pnpm@8.1.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN pnpm run build

# Expose the port your Next.js app is using (by default, Next.js uses port 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
