export const mapsSelector = (lat: number, lon: number) => {
  let protocol = "";
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") !== -1 ||
    navigator.platform.indexOf("iPod") !== -1 ||
    navigator.platform.indexOf("iPad") !== -1
  ) {
    protocol = "maps";
  } else {
    protocol = "https";
  }
  window.open(`${protocol}://maps.google.com/maps/search/?api=1&query=${lat},${lon}`);
};
