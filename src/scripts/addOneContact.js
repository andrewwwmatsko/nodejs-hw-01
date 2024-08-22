import { updateContacts } from './updateContacts.js';

import { receiveCurrentContacts } from './receiveCurrentContacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contacts = await receiveCurrentContacts();
  const newContact = createFakeContact();
  contacts.push(newContact);

  await updateContacts(contacts);
};

addOneContact();
