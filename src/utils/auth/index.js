export function requireAuthentication(ctx) {
  const { req, res } = ctx;

  if (!req.session.user) {
    res.writeHead(302, { Location: "/login" });
    res.end();
    return false;
  }

  return true;
}
