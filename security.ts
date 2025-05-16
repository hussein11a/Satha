// Security utility functions
import { useEffect } from 'react';

// Disable text selection
export const useDisableTextSelection = () => {
  useEffect(() => {
    // Add no-select class to body
    document.body.classList.add('no-select');
    
    // Disable copy
    const disableCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };
    
    document.addEventListener('copy', disableCopy);
    
    return () => {
      document.body.classList.remove('no-select');
      document.removeEventListener('copy', disableCopy);
    };
  }, []);
};

// Disable right click
export const useDisableRightClick = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      alert('عذراً، النقر بزر الفأرة الأيمن غير مسموح');
      return false;
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
};

// Disable developer tools
export const useDisableDeveloperTools = () => {
  useEffect(() => {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
      ) {
        e.preventDefault();
        alert('عذراً، فتح أدوات المطور غير مسموح');
        return false;
      }
    };
    
    // Detect devtools
    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      
      if (widthThreshold || heightThreshold) {
        alert('عذراً، استخدام أدوات المطور غير مسموح');
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', detectDevTools);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', detectDevTools);
    };
  }, []);
};

// Disable image dragging
export const useDisableImageDragging = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img');
    
    const preventDrag = (e: DragEvent) => {
      e.preventDefault();
    };
    
    images.forEach(img => {
      img.addEventListener('dragstart', preventDrag);
      img.classList.add('no-drag');
    });
    
    return () => {
      images.forEach(img => {
        img.removeEventListener('dragstart', preventDrag);
        img.classList.remove('no-drag');
      });
    };
  }, []);
};

// Combined security hook
export const useSecurity = () => {
  useDisableTextSelection();
  useDisableRightClick();
  useDisableDeveloperTools();
  useDisableImageDragging();
};
