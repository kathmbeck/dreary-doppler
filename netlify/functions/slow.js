// netlify/functions/slow.js
const { trace } = require('@opentelemetry/api');

exports.handler = async function () {
  const tracer = trace.getTracer('netlify-demo');
  const span = tracer.startSpan('slow-netlify-function');

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  span.end();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Slow function completed!' }),
  };
};