export async function onRequest(context) {
  const response = await context.env.ASSETS.fetch(
    new Request(new URL('/invite.html', context.request.url))
  );
  return response;
}
