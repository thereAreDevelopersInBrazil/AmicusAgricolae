FROM node:18-alpine AS builder
WORKDIR /app

COPY . .

RUN npm install && \
    npm run build


FROM node:18-alpine
WORKDIR /app

COPY package*.json ./

COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated

RUN npm install --omit=dev

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

RUN npx prisma db push

EXPOSE 3000
CMD ["npm", "run", "start:prod"]