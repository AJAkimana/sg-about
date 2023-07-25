FROM node:18.9.0-alpine

RUN npm install -g pnpm@8.1.1

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

# Start the Next.js app in production mode
CMD ["pnpm", "start"]
