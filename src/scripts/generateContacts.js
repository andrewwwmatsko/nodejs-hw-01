import { updateContacts } from './updateContacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';

import { receiveCurrentContacts } from './receiveCurrentContacts.js';

const generateContacts = async (number) => {
  const contacts = await receiveCurrentContacts();
  const generatedContacts = Array(number).fill(0).map(createFakeContact);

  const newContactList = [...contacts, ...generatedContacts];

  await updateContacts(newContactList);
};

generateContacts(5);
