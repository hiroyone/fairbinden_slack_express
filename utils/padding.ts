// Helper function to add leading zero padding to a number
export function zeroPad(num: number, places: number): string {
  return String(num).padStart(places, "0");
}
