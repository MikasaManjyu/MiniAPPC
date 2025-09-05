import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    "accountAssociation": {
      "header": "eyJmaWQiOjEsInR5cGUiOiJjdXN0b2R5IiwiaGV4IjoiMHgxMjM0NTY3ODkwYWJjZGVmIn0",
      "payload": "eyJkb21haW4iOiJleGFtcGxlLmNvbSJ9",
      "signature": "MHg..."
    },
    "frame": {
      "version": "1",
      "name": "BASE Mini APP",
      "iconUrl": "https://example.com/icon.png",
      "homeUrl": "/",
      "imageUrl": "https://example.com/preview.png",
      "buttonTitle": "Launch App",
      "splashImageUrl": "https://example.com/splash.png",
      "splashBackgroundColor": "#f0f9ff",
      "webhookUrl": "/api/webhook"
    }
  };

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}