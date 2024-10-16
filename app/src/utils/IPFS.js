import { create } from "ipfs-http-client";

const client = create({ url: 'http://localhost:5001' });

export async function upload(file) {
  if(file === undefined || file === null) return;
  try {
    const result = await client.add(file);
    return result;
  } catch (error) {
    return;
  }
}

export async function get(cid) {
  if(!cid) return;
  try {
    let fileContent = '';

    for await (const chunk of client.cat(cid)) {
      fileContent += chunk.toString();
    }

    return fileContent;
  }
  catch(error) {

  }
}

