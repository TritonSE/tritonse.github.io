function addWidthToImagePath(imagePath: string, width: number) {
  return imagePath.replace(/(?=\.[^.]+$)/, `__${width}`);
}

export { addWidthToImagePath };
