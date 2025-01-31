import { NextResponse } from 'next/server'

export async function GET(request) {
  const userAgent = request.headers.get('user-agent')
  return NextResponse.json(
    { message: `Hello, ${userAgent}!` },
    {
      headers: new Headers({
        Vary: 'User-Agent',
        'Cache-Control': 's-maxage=3600',
      }),
    }
  )
}
