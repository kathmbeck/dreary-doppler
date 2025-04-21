// tracing.js
import { NodeSDK } from '@opentelemetry/sdk-node';
import pkg from '@opentelemetry/resources';
const { Resource } = pkg;
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';

const sdk = new NodeSDK({
  traceExporter: new ConsoleSpanExporter(),
  spanProcessor: new SimpleSpanProcessor(new ConsoleSpanExporter()),
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'astro-tracing-demo',
  }),
});

sdk.start();
