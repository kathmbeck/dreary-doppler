import { trace } from '@opentelemetry/api';

export async function GET() {
  const tracer = trace.getTracer('astro-api');
  const span = tracer.startSpan('slow-handler');

  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay

  span.end();

  return new Response(JSON.stringify({ message: 'Slow response with trace!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
