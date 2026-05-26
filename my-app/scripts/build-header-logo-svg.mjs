import fs from "fs";

const pngPath =
  "C:\\Users\\TrioPulse\\.cursor\\projects\\c-Users-TrioPulse-workspace-trioPulse-web-UI\\assets\\c__Users_TrioPulse_AppData_Roaming_Cursor_User_workspaceStorage_ebf2c40d64b2df70b3d06537daef1431_images_Trioupulse_logo-03621b46-d2a0-4da9-86c9-643b1fd06c1d.png";
const outSvgPath = "C:\\Users\\TrioPulse\\workspace\\trioPulse-web-UI\\my-app\\public\\triopulse-header-logo.svg";

const pngBytes = fs.readFileSync(pngPath);
const b64 = pngBytes.toString("base64");

// Provided PNG dimensions (from quick header read): 299x65
const w = 299;
const h = 65;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="TrioPulse">
  <title>TrioPulse</title>
  <image href="data:image/png;base64,${b64}" width="${w}" height="${h}" />
</svg>
`;

fs.writeFileSync(outSvgPath, svg, "utf8");
console.log(`Wrote ${outSvgPath}`);

