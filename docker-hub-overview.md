# minhle202/nestjs-api

A production-grade **NestJS 11** REST API starter on **Node.js 22**, built as a lean multi-stage image. Part of a branded family of Docker starter images by **Lê Đức Minh**.

## Supported tags

- `latest` — multi-arch manifest for **linux/amd64** and **linux/arm64**.

## Quick start

```bash
docker pull minhle202/nestjs-api
docker run --rm -p 3000:3000 minhle202/nestjs-api
```

Override the listening port with `-e PORT=8080`.

## Endpoints

| Method | Path               | Response                                         |
| ------ | ------------------ | ------------------------------------------------ |
| GET    | `/`                | `{ name, version, endpoints }`                   |
| GET    | `/health`          | `{ "status": "ok", "uptime": <seconds> }`        |
| GET    | `/api/hello?name=` | `{ "message": "Hello, <name>!" }` (default world) |

```bash
curl http://localhost:3000/
curl http://localhost:3000/health
curl "http://localhost:3000/api/hello?name=Minh"
```

## Features

- Node.js 22 on Alpine — small, current runtime.
- NestJS 11 + TypeScript, compiled with `nest build` to `dist/`.
- Multi-stage build (builder → runtime); runtime ships only production deps + compiled output.
- Runs as the non-root `node` user.
- Built-in `HEALTHCHECK` probing `/health`.
- Graceful shutdown via Nest shutdown hooks.

## Source

[github.com/DucMinhNe/docker-nestjs-api](https://github.com/DucMinhNe/docker-nestjs-api)

## License

MIT © 2026 Lê Đức Minh.
