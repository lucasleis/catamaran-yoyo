const importAssets = (glob: Record<string, string>) =>
  Object.values(glob).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
  );

export const barcoImages = importAssets(
  import.meta.glob('/src/assets/imgs/barco/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
    eager: true,
    as: 'url',
  })
);

export const clientesImages = importAssets(
  import.meta.glob('/src/assets/imgs/clientes/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
    eager: true,
    as: 'url',
  })
);

export const comidaImages = importAssets(
  import.meta.glob('/src/assets/imgs/comida/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
    eager: true,
    as: 'url',
  })
);

export const destinoImages = importAssets(
  import.meta.glob('/src/assets/imgs/destino/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
    eager: true,
    as: 'url',
  })
);


export const videos = importAssets(
  import.meta.glob(
    '/src/assets/video/video-*.{mp4,MP4}',
    {
      eager: true,
      as: 'url',
    }
  )
);
