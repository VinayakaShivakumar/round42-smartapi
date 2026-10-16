export async function onRequest(context) {
  const request = context.request;

  // Internal-only bridge:
  // Pages -> Service Binding -> private Worker -> VPC -> OCI.
  return context.env.ROUND42_PROXY.fetch(request);
}
