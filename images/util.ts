function getOptimizedImagePath(relPath: string, width: number) {
  return relPath.replace(/\//g, "__").replace(/(?=\.[^.]+$)/, `__${width}`);
}

export { getOptimizedImagePath };
