export const mapsSelector = (lat: number, lon: number) => {
  // let protocol = "";
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") !== -1 ||
    navigator.platform.indexOf("iPod") !== -1 ||
    navigator.platform.indexOf("iPad") !== -1
  ) {
    // protocol = "maps";
    window.location.assign(`maps://maps.apple.com/maps?daddr=${lat},${lon}&amp;ll=`);
  } else {
    window.open(`https://maps.google.com/maps/search/?api=1&query=${lat},${lon}`);
    // protocol = "https";
  }
};
