export default {
  async fetch(request) {
    const url = new URL(request.url)
    const target = url.searchParams.get('target') || 'http://127.0.0.1:80/'
    const body = await request.text()
    console.log('BODY:', body)
    return Response.redirect(target, 302)
  }
}