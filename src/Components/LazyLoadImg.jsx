import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, placeholderSrc, className = '', style = {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the image enters the viewport
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        // Start loading when image is 200px from entering the viewport
        rootMargin: '200px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    >
      {!isLoaded && (
        <img
          src={placeholderSrc || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"}
          alt={alt}
          className="placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            filter: 'blur(10px)',
            transition: 'opacity 0.3s ease',
            opacity: isLoaded ? 0 : 1
          }}
        />
      )}

      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          style={{
            width: '100%',
            height: '100%',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
    </div>
  );
};

// Gallery component that uses LazyImage for multiple images
const LazyLoadingGallery = ({ images }) => {
  return (
    <div className="gallery-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
      {images.map((image, index) => (
        <LazyImage
          key={index}
          src={image.src}
          alt={image.alt || `Image ${index}`}
          placeholderSrc={image.placeholderSrc}
          style={{ aspectRatio: '16/9' }}
        />
      ))}
    </div>
  );
};

export { LazyImage, LazyLoadingGallery };