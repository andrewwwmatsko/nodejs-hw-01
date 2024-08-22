import { receiveCurrentContacts } from './receiveCurrentContacts.js';

import { updateContacts } from './updateContacts.js';

export const removeLastContact = async () => {
  const contacts = await receiveCurrentContacts();

  contacts.pop();
  await updateContacts(contacts);
};

removeLastContact();
