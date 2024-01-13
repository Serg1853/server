const checkExtension = (fileName) => {
  const EXTENSIONS = ["txt", "exe", "pdf", "png", "js"];

  const extension = fileName.split(".").pop().toLowerCase();
  const result = EXTENSIONS.includes(extension);

  return { extension, result };
};

export default checkExtension;
