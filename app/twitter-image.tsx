import { alt, contentType, createSocialImage, size } from "./social-image";

export { alt, contentType, size };

export const dynamic = "force-static";

export default async function Image() {
  return createSocialImage();
}
