import { streamText } from 'ai'

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') {
      return Response.json(
        { error: 'Use POST with JSON: { "prompt": "..." }' },
        { status: 405, headers: { Allow: 'POST' } },
      )
    }

    let body: { prompt?: unknown }
    try {
      body = await request.json()
    } catch {
      return Response.json({ error: 'Request body must be valid JSON.' }, { status: 400 })
    }

    const prompt =
      typeof body.prompt === 'string' && body.prompt.trim()
        ? body.prompt.trim()
        : 'Why is the sky blue?'

    const result = streamText({
      model: 'openai/gpt-5.6-sol',
      prompt,
    })

    return result.toTextStreamResponse()
  },
}
