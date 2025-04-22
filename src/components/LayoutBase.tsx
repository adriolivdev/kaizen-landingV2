// src/components/LayoutBase.tsx
import { ReactNode } from 'react';
import Footer from './Footer';

interface LayoutBaseProps {
  children: ReactNode;
}

export default function LayoutBase({ children }: LayoutBaseProps) {
  return (
    <main className="bg-light text-dark min-h-[100vh] flex flex-col justify-between">
      <div className="py-20 px-6 md:px-16 lg:px-32 flex-1">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
}
