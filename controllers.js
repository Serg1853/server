import fs from "node:fs/promises";

import path from "node:path";

import checkExtension from "./helpers/checkExtension";

const createFile = async (req, res) => {
  const { extension, result } = checkExtension(req.body.fileName);
  if (!result) {
    res.status(400).json({
      message: `Sorry this app doesn't support files this ${extension} extension`,
    });
    return;
  }
};
