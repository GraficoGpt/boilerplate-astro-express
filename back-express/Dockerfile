# Etapa base
FROM node:lts-slim AS base
WORKDIR /app
COPY package*.json ./

# Etapa de producción
FROM base AS production
ENV NODE_ENV=production
RUN npm ci --only=production
COPY . .

# Variables de entorno y puerto
ENV PORT=3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]