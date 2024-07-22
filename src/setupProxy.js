import { createProxyMiddleware } from 'http-proxy-middleware';

// eslint-disable-next-line no-undef
export default function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://pethub-hml.cgtecnologia.com.br/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', 
      },
    }),
    createProxyMiddleware({
      target: 'https://pethub-hml.cgtecnologia.com.br/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', 
      },
    })
  );
}