const config = {
  widthOverride: {
    members: 1080,
  },
};

function getMaxWidth(relPath: string, width: number) {
  for (const [prefix, override] of Object.entries(config.widthOverride)) {
    if (relPath.startsWith(prefix)) {
      width = Math.min(override, width);
    }
  }
  return width;
}

export { getMaxWidth };
