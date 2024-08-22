import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const receiveCurrentContacts = async () => {
  const contacts = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(contacts);
};
