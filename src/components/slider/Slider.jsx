"use client";
import { useEffect } from 'react';
import styles from './slider.module.css';

const Slider = () => {
  useEffect(() => {
    // Fallback for browsers that don't support CSS scroll-timeline
    const supportsScrollTimeline = CSS.supports('animation-timeline', 'scroll()');
    
    if (!supportsScrollTimeline) {
      let ticking = false;
      
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = scrollTop / maxScroll;
            
            const line1 = document.querySelector(`.${styles.line1}`);
            const line2 = document.querySelector(`.${styles.line2}`);
            
            if (line1 && line2) {
              // Reverse direction based on scroll position
              if (scrollProgress > 0.5) {
                line1.style.animationDirection = 'reverse';
                line2.style.animationDirection = 'normal';
              } else {
                line1.style.animationDirection = 'normal';
                line2.style.animationDirection = 'reverse';
              }
            }
            
            ticking = false;
          });
          ticking = true;
        }
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
   <div className={styles.sliderContainer}>
  <div className={`${styles.scrollingLine} ${styles.line1}`}>
    <div className={styles.content}>
      <span>
        Discover inspiring travel narratives • Explore design & style trends •
        Immerse in cultural insights • Elevate lifestyle perspectives •
        Innovate through creative coding ideas •
      </span>
      <span>
        Discover inspiring travel narratives • Explore design & style trends •
        Immerse in cultural insights • Elevate lifestyle perspectives •
        Innovate through creative coding ideas •
      </span>
      <span>
        Discover inspiring travel narratives • Explore design & style trends •
        Immerse in cultural insights • Elevate lifestyle perspectives •
        Innovate through creative coding ideas •
      </span>
      <span>
        Discover inspiring travel narratives • Explore design & style trends •
        Immerse in cultural insights • Elevate lifestyle perspectives •
        Innovate through creative coding ideas •
      </span>
    </div>
  </div>

  <div className={`${styles.scrollingLine} ${styles.line2}`}>
    <div className={styles.content}>
      <span>
        Curated global travel inspiration • Insightful lifestyle features •
        Refined fashion & style expressions • Thought-provoking cultural
        perspectives • Smart creative coding explorations •
      </span>
      <span>
        Curated global travel inspiration • Insightful lifestyle features •
        Refined fashion & style expressions • Thought-provoking cultural
        perspectives • Smart creative coding explorations •
      </span>
      <span>
        Curated global travel inspiration • Insightful lifestyle features •
        Refined fashion & style expressions • Thought-provoking cultural
        perspectives • Smart creative coding explorations •
      </span>
      <span>
        Curated global travel inspiration • Insightful lifestyle features •
        Refined fashion & style expressions • Thought-provoking cultural
        perspectives • Smart creative coding explorations •
      </span>
    </div>
  </div>
</div>

  );
};

export default Slider;
