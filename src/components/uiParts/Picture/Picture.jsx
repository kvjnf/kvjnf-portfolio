function Picture({ src, alt, ...args}) {

  return (
    <picture>
      <source srcSet={`${src}?fm=avif`} type="image/avif" />
      <source srcSet={`${src}?fm=webp`} type="image/webp" />
      <img 
        decoding="async"
        loading="lazy"
        src={src} 
        alt={alt}
        {...args} 
        />
    </picture>
  )
}

export default Picture