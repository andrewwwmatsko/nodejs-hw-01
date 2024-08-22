import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const updateContacts = (newContacts) =>
  fs.writeFile(PATH_DB, JSON.stringify(newContacts, null, 2));
