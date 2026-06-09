# docker-nestjs-api

A production-grade Docker boilerplate for a **NestJS 11** REST API running on **Node.js 22**. Part of a branded family of starter images by **Lê Đức Minh** ([`minhle202`](https://hub.docker.com/u/minhle202) on Docker Hub, [`DucMinhNe`](https://github.com/DucMinhNe) on GitHub).

Compiled TypeScript, multi-stage build, non-root runtime, built-in healthcheck, and graceful shutdown hooks — ready to deploy.

## Pull

```bash
docker pull minhle202/nestjs-api
```

## Run

```bash
docker run --rm -p 3000:3000 minhle202/nestjs-api
```

Override the port with the `PORT` env var:

```bash
docker run --rm -e PORT=8080 -p 8080:8080 minhle202/nestjs-api
```

## Try it

```bash
curl http://localhost:3000/
curl http://localhost:3000/health
curl "http://localhost:3000/api/hello?name=Minh"
```

```json
{"name":"docker-nestjs-api","version":"1.0.0","endpoints":["/","/health","/api/hello"]}
{"status":"ok","uptime":12.34}
{"message":"Hello, Minh!"}
```

## Endpoints

| Method | Path               | Description                                              |
| ------ | ------------------ | -------------------------------------------------------- |
| GET    | `/`                | Service metadata: name, version, available endpoints.    |
| GET    | `/health`          | Health probe: `{ "status": "ok", "uptime": <seconds> }`. |
| GET    | `/api/hello?name=` | Greeting; `name` defaults to `world`.                    |

## What's inside

- **Node.js 22** on Alpine — small, current LTS runtime.
- **NestJS 11** with TypeScript, compiled via `nest build` to `dist/`.
- **Multi-stage Dockerfile** — `builder` stage installs deps and compiles, `runtime` stage carries only production `node_modules` + `dist`.
- **Non-root** — runs as the unprivileged `node` user.
- **HEALTHCHECK** — built-in container healthcheck hitting `/health`.
- **Graceful shutdown** — `app.enableShutdownHooks()` for clean SIGTERM handling.

## Local development

```bash
npm install
npm run start:dev   # watch mode
npm run build       # compile to dist/
npm start           # node dist/main.js
```

## Tags

- `latest` — multi-arch manifest for **linux/amd64** and **linux/arm64**.

## License

MIT © 2026 Lê Đức Minh. See [LICENSE](./LICENSE).
