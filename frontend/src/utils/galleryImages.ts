const importImages = (glob: Record<string, string>) =>
  Object.values(glob).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
  );

export const barcoImages = importImages(
  import.meta.glob('/src/assets/imgs/barco/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
    eager: true,
    as: 'url',
  })
);

export const clientesImages = importImages(
  import.meta.glob('/src/assets/imgs/clientes/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
    eager: true,
    as: 'url',
  })
);

export const comidaImages = importImages(
  import.meta.glob('/src/assets/imgs/comida/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
    eager: true,
    as: 'url',
  })
);

export const destinoImages = importImages(
  import.meta.glob('/src/assets/imgs/destino/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
    eager: true,
    as: 'url',
  })
);
