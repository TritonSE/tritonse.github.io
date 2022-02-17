const config = {
  staticPrefix: "assets/images",
  widthOverride: {
    members: 1080,
    clients: 1920,
    sponsors: 1920,
  },
  // Keep this in sync with next.config.js
  sizes: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  extensions: [".jpg", ".png"],
};

function getMaxWidth(relPath: string, width: number) {
  for (const [prefix, override] of Object.entries(config.widthOverride)) {
    if (relPath.startsWith(prefix)) {
      width = Math.min(override, width);
    }
  }
  return width;
}

export default config;
export { getMaxWidth };
