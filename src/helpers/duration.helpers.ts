export const getPlaylistDuration = (durations: string[]): string => {
  let totalSegundos = 0;

  for (const duration of durations) {
    const [minutos, segundos] = duration.split(":").map(Number);
    totalSegundos += minutos * 60 + segundos;
  }

  const horas = Math.floor(totalSegundos / 3600);
  const minutosRestantes = Math.floor((totalSegundos % 3600) / 60);
  const segundosRestantes = totalSegundos % 60;

  const duracionTotal = `${horas}:${minutosRestantes}:${segundosRestantes}`;

  return duracionTotal;
};

export const adaptSecondsToDuration = (secondsInt: number): string => {
  const hours = Math.floor(secondsInt / 60 / 60);
  const minutes = Math.floor((secondsInt / 60) % 60);
  const seconds = Math.floor(secondsInt - hours * 60 * 60 - minutes * 60);
  return `${hours ? hours.toString().padStart(2, "0") + ":" : ""}${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
