import fs from 'fs';
import {data} from "../../constants/env.js";

class DataReaderService {
  static getFullFileName (fileName) {
    return `${data.mode}.${fileName}`
  }

  static getTestData (fileName) {
    return fs.readFileSync(`./test/resources/${this.getFullFileName(fileName)}`, 'utf-8')
      .toString()
      .replace(/\r\n/g, '\n')
      .split('\n')
      .reduce((queryInfo, resourceString) => {
        if (resourceString.length > 0) {
          const [fieldName, ...fieldValues] = resourceString.split('=');
          queryInfo[fieldName] = fieldValues.join("=");
        }
        return queryInfo;
      }, {})

  }
}

export {DataReaderService}
