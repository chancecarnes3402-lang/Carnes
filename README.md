# Carnes AI Stream

Minimal Vercel AI SDK streaming app using Vercel AI Gateway and `openai/gpt-5.6-sol`.

## What it contains

- `api/chat.ts` — streaming POST endpoint
- `index.html` — simple browser interface
- `.env.example` — optional static Gateway key for local/non-Vercel use

## API

```bash
curl -N -X POST /api/chat \
  -H "content-type: application/json" \
  -d '{"prompt":"Why is the sky blue?"}'
```

## Authentication

When deployed on Vercel, use Vercel AI Gateway with OIDC so no API key is committed to GitHub. For local or non-Vercel execution, set `AI_GATEWAY_API_KEY` in a private environment file or secret store. Never commit a real key.

## Deploy

Import this repository into Vercel and enable AI Gateway for the project. Vercel-hosted deployments can use OIDC authentication automatically.
