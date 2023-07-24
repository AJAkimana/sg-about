FROM node:18.9.0 as builder

RUN npm install -g pnpm@8.1.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN pnpm run build

FROM node:18.9.0-alpine

# Install pnpm globally with the specific pnpm version.
RUN pnpm run build

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
