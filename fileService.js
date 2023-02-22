import * as uuid from "uuid";
import * as path from "path";

export const saveFile = (file) => {
  try {
    const fileName = uuid.v4() + '.jpg';
    const filePath = path.resolve('static', fileName); // resolve=> crossplatform, path to files
    file.mv(filePath); // mv=move

      return fileName;
      
  } catch (err) {
    console.log(err.message);
  }
};
