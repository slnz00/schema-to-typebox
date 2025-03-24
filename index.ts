import path from 'node:path';
import fs from 'node:fs/promises';
import { schema2typebox } from './schema2typebox';

const schema = {};

const changeExtension = (filePath: string, newExt: string) => {
  return path.format({ ...path.parse(filePath), base: '', ext: newExt })
}

const main = async () => {
  const typeboxResult = await schema2typebox({input: JSON.stringify(schema)});

  await fs.writeFile(
    changeExtension('output', '.ts'),
    typeboxResult
  );
};

main().catch(console.error);
