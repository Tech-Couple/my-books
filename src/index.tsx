import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import reportWebVitals from './reportWebVitals';
import Routes from './Routes';

Sentry.init({
  dsn: 'https://cff5eff5a331405ebeeb697572bd94f2@o920276.ingest.sentry.io/5865665',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
