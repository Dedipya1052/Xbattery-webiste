import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    // Try common locations for the PDF
    const rootPath = path.join(process.cwd(), "ESS_Brochure V3.pdf");
    const publicPath = path.join(process.cwd(), "public", "ESS_Brochure V3.pdf");
    const parentPath = path.join(process.cwd(), "..", "ESS_Brochure V3.pdf");

    const filePath = [rootPath, publicPath, parentPath].find((p) => fs.existsSync(p));
    if (!filePath) {
      res.status(404).json({ error: "File not found" });
      return;
    }

    const stat = fs.statSync(filePath);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'inline; filename="ESS_Brochure V3.pdf"');
    res.setHeader("Content-Length", stat.size);

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (err) {
    res.status(500).json({ error: "Failed to open ESS brochure" });
  }
}


