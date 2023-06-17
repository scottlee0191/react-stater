import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

export default function RootErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const logError = (error: Error, info: { componentStack: string }) => {
    // eslint-disable-next-line no-console
    console.log(error, info);
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      {children}
    </ErrorBoundary>
  );
}
