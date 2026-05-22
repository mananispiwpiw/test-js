export default {
  async fetch(request) {
    const target = new URL(request.url).searchParams.get('target') || 'http://127.0.0.1:80/'
    return Response.redirect(target, 302)
  }
}