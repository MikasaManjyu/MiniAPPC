'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet, Zap, Heart } from 'lucide-react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleHelloClick = () => {
    setMessage('こんにちは！');
    setIsVisible(true);
    
    // メッセージを3秒後に非表示にする
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">BASE Mini APP</h1>
          <p className="text-gray-600">Farcaster Frame対応アプリ</p>
        </div>

        {/* Main Card */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-gray-800">
              Hello Button Demo
            </CardTitle>
            <CardDescription>
              ボタンを押して挨拶してみましょう
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Hello Button */}
            <div className="text-center space-y-4">
              <Button 
                onClick={handleHelloClick}
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                こんにちはボタン
              </Button>
              
              {/* Message Display */}
              {isVisible && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-in fade-in duration-300">
                  <p className="text-green-800 font-medium text-lg">{message}</p>
                </div>
              )}
            </div>

            {/* Future Features Preview */}
            <div className="border-t pt-4">
              <p className="text-sm text-gray-500 mb-3">今後実装予定の機能:</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Wallet className="w-4 h-4" />
                  <span className="text-sm">Wallet認証ログイン</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">サイトへの寄付機能</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">投げ銭機能</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>Base Sepolia Testnet対応</p>
          <p>Powered by Base Mini App Kit</p>
        </div>
      </div>
    </div>
  );
}