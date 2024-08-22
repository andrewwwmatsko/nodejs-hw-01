import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';

import { getAllContacts } from './getAllContacts.js';

const generateContacts = async (number) => {
  const contacts = await getAllContacts();
  const generatedContacts = Array(number).fill(0).map(createFakeContact);

  const newContactList = [...contacts, ...generatedContacts];

  await fs.writeFile(PATH_DB, JSON.stringify(newContactList, null, 2), 'utf-8');
};

generateContacts(5);
