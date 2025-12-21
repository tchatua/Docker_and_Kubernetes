# Revisiting and optimizing our typescript Dockerfile

# --------------------
# Build stage
# --------------------
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm ci

COPY src src
COPY tsconfig.json tsconfig.json

#RUN npm run build
RUN npm run 

# --------------------
# Production deps stage
# --------------------FROM node:22-alpine AS deps
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json .
RUN npm ci --only=production

# --------------------
# Runtime stage (distroless)
# --------------------
FROM gcr.io/distroless/nodejs22
WORKDIR /app
COPY --from=deps /app/node_modules node-modules
COPY --from=build /app/dist dist
ENV PORT=3000
CMD ["dist/index.js"]

