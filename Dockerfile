FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && \
    npm run build

# Decidi dividir em duas imagens pois a primeira eu posso usar apenas para buildar e a segunda para rodar
# Porque? Para buildar é necessário algumas devDependencies, e para rodar não são necessárias,
# posso fazer uma instalação omitindo as dependencias de desenvolvimento reduzindo o tamanho da imagem final

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated
RUN npm install --omit=dev && \
    npx prisma db push
EXPOSE 3000
CMD ["npm", "start:prod"]
