import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HelloWorld: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto text-center shadow-lg">
          <CardContent className="p-12">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Hello World
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Welcome to the simplest application ever created.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelloWorld;