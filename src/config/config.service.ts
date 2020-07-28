import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

export class ConfigService {
  private readonly envConfig: Record<string, string>;
  constructor() {
    this.envConfig = dotenv.parse(fs.readFileSync(this.get_path()))
  }
  private get_path() {
    return `${path.join(__dirname,'../..','configurations',process.env.NODE_ENV)}.env`;
  }
  get(key: string): string {
    return this.envConfig[key];
  }
}

export default new ConfigService()
