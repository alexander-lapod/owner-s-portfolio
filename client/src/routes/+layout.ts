// Prerender every route: the site is static, so Cloudflare serves plain files
// and never charges CPU time against the Workers free plan.
export const prerender = true;
export const trailingSlash = 'never';
