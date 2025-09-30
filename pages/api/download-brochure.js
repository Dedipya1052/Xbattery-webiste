import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const publicPath = path.join(process.cwd(), "public", "Xbattery_BharatBMS_Specifications.pdf");
    const rootPath = path.join(process.cwd(), "Xbattery_BharatBMS_Specifications.pdf");
    const parentPath = path.join(process.cwd(), "..", "Xbattery_BharatBMS_Specifications.pdf");

    const filePath = [publicPath, rootPath, parentPath].find((p) => fs.existsSync(p));
    if (!filePath) {
      res.status(404).json({ error: "File not found" });
      return;
    }

    const stat = fs.statSync(filePath);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="Xbattery_BharatBMS_Specifications.pdf"'
    );
    res.setHeader("Content-Length", stat.size);

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (err) {
    res.status(500).json({ error: "Failed to download brochure" });
  }
}



