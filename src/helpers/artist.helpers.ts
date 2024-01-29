export const adaptArtist = (artists: string[]) => {
  return new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  }).format(artists);
};
