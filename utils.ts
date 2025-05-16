// Utility functions
import { useEffect, useState, useRef } from 'react';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for combining class names (required by shadcn/ui components)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Lazy loading utility for images
interface UseLazyLoadImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
}

export const useLazyLoadImage = ({
  src,
  alt,
  className = '',
  placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=='
}: UseLazyLoadImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Create new IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If image is in viewport
        if (entry.isIntersecting) {
          // Create new image to preload
          const img = new Image();
          img.src = src;
          img.onload = () => {
            // Update state when image is loaded
            if (imgRef.current) {
              setCurrentSrc(src);
              setIsLoaded(true);
            }
          };
          // Unobserve after loading
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '200px 0px', // Start loading when image is 200px from viewport
      threshold: 0.01
    });

    // Observe the image element
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Cleanup
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return {
    imgRef,
    currentSrc,
    isLoaded,
    imgProps: {
      src: currentSrc,
      alt,
      className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
      style: { transition: 'opacity 0.3s ease-in-out' },
      onDragStart: (e: React.DragEvent<HTMLImageElement>) => e.preventDefault()
    }
  };
};

// Adaptive image loading utility
export const getAdaptiveImageSrc = (src: string, _width: number): string => {
  // For this demo, we'll just return the original since we don't have resized versions
  return src;
};

// Hook to get viewport width
export const useViewportWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

// SEO utility for dynamic meta tags
export const updateMetaTags = (title: string, description: string) => {
  // Update document title
  document.title = title;

  // Update meta tags
  const metaTags = {
    description: description,
    'og:title': title,
    'og:description': description,
    'twitter:title': title,
    'twitter:description': description,
  };

  Object.entries(metaTags).forEach(([name, content]) => {
    // Try to find existing tag
    let element = document.querySelector(`meta[name="${name}"]`) || 
                  document.querySelector(`meta[property="${name}"]`);
    
    if (element) {
      // Update existing tag
      element.setAttribute('content', content);
    } else {
      // Create new tag if it doesn't exist
      element = document.createElement('meta');
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        element.setAttribute('property', name);
      } else {
        element.setAttribute('name', name);
      }
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  });
};
