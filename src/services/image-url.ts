import noImage from "../assets/noImagePlatform.jpeg";

// This function takes an image URL and returns a new URL with the same image cropped to 600x400 pixels.
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;
