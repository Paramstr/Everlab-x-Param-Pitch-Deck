import React from 'react';

export interface SlideProps {
  className?: string;
  children: React.ReactNode;
}

export interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}