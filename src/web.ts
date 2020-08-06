import { WebPlugin } from '@capacitor/core';
import { ISoterPlugin } from './definitions';

export class ISoterWeb extends WebPlugin implements ISoterPlugin {
  constructor() {
    super({
      name: 'ISoter',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const ISoter = new ISoterWeb();

export { ISoter };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ISoter);
