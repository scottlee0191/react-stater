import React from 'react';
import { AlertCircle } from 'lucide-react';
import { ErrorBoundary } from 'react-error-boundary';

import { Alert, AlertDescription, AlertTitle } from './alert';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="container max-w-2xl py-6">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
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
