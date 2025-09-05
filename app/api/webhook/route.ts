import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Farcaster webhookの処理
    console.log('Webhook received:', body);
    
    // 基本的なレスポンス
    return NextResponse.json({
      success: true,
      message: 'Webhook processed successfully'
    });
    
  } catch (error) {
    console.error('Webhook error:', error);
    
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'BASE Mini APP Webhook Endpoint',
    timestamp: new Date().toISOString()
  });
}