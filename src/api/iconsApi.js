import fs from 'fs';
import path from 'path';

export const ICON_SECTION_PATH = path.join(process.cwd(), 'src/assets/icons');

const iconSectionPaths = fs.readdirSync(ICON_SECTION_PATH);

export const getBase64Icons = async () => {
  const base64Icons = iconSectionPaths.map((icon) => {
    let buff = fs.readFileSync(`${ICON_SECTION_PATH}/${icon}`);
    return buff.toString('base64');
  });

  return base64Icons;
};
