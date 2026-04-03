FROM oven/bun:alpine

WORKDIR /app

COPY package*.json ./
RUN bun install

COPY . .

EXPOSE 5177

CMD ["bun", "run", "dev", "--", "--host"]
