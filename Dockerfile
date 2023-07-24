# Stage 1: Build the Next.js app
FROM node:18.9.0 as builder

# Install pnpm globally with the specific pnpm version
RUN npm install -g pnpm@8.1.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app, disabling all ESLint rules during the build
RUN pnpm run build -- -o '{"rules": {}}'

# Stage 2: Create the production image
FROM node:18.9.0-alpine

# Install pnpm globally with the specific pnpm version (optional, only if needed in production)
RUN npm install -g pnpm@8.1.1

# Set the working directory inside the container
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose the port your Next.js app is using (by default, Next.js uses port 3000)
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["pnpm", "start"]
