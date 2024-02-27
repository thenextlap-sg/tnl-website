import { useEffect, useState } from 'react';

export const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export const useScroll = (onScroll) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => setScrollPosition(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition, onScroll]);
}


export const useResize = (onResize) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        onResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [screenWidth, onResize]);
}