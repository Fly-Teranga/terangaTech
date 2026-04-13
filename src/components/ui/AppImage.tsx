"use client";

import React, { memo, useCallback, useMemo, useState } from "react";
import Image from "next/image";

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  fill?: boolean;
  sizes?: string;
  onClick?: () => void;
  fallbackSrc?: string;
  loading?: "lazy" | "eager";
  unoptimized?: boolean;
  [key: string]: unknown;
}

const AppImage = memo(function AppImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
  fill = false,
  sizes,
  onClick,
  fallbackSrc = "/assets/images/no_image.png",
  loading = "lazy",
  unoptimized = false,
  ...props
}: AppImageProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const displaySrc = failedSrc === src ? fallbackSrc : src;
  const isLoading = loadedSrc !== displaySrc;

  const isExternalUrl = useMemo(
    () => typeof displaySrc === "string" && displaySrc.startsWith("http"),
    [displaySrc],
  );

  const resolvedUnoptimized = unoptimized || isExternalUrl;

  const handleError = useCallback(() => {
    if (failedSrc !== src) {
      setFailedSrc(src);
    }
  }, [failedSrc, src]);

  const handleLoad = useCallback(() => {
    setLoadedSrc(displaySrc);
  }, [displaySrc]);

  const imageClassName = useMemo(() => {
    const classes = [className];
    if (isLoading) classes.push("bg-gray-200");
    if (onClick) {
      classes.push("cursor-pointer transition-opacity duration-200 hover:opacity-90");
    }
    return classes.filter(Boolean).join(" ");
  }, [className, isLoading, onClick]);

  if (fill) {
    return (
      <div className="relative h-full w-full">
        <Image
          src={displaySrc}
          alt={alt}
          className={imageClassName}
          quality={quality}
          placeholder={placeholder}
          unoptimized={resolvedUnoptimized}
          onError={handleError}
          onLoad={handleLoad}
          onClick={onClick}
          fill
          sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          style={{ objectFit: "cover" }}
          {...(priority ? { priority: true } : { loading })}
          {...(blurDataURL && placeholder === "blur" ? { blurDataURL } : {})}
          {...props}
        />
      </div>
    );
  }

  return (
    <Image
      src={displaySrc}
      alt={alt}
      className={imageClassName}
      quality={quality}
      placeholder={placeholder}
      unoptimized={resolvedUnoptimized}
      onError={handleError}
      onLoad={handleLoad}
      onClick={onClick}
      width={width || 400}
      height={height || 300}
      sizes={sizes}
      {...(priority ? { priority: true } : { loading })}
      {...(blurDataURL && placeholder === "blur" ? { blurDataURL } : {})}
      {...props}
    />
  );
});

AppImage.displayName = "AppImage";

export default AppImage;
