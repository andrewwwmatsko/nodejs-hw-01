import { receiveCurrentContacts } from './receiveCurrentContacts.js';

export const countContacts = async () => {
  const contacts = await receiveCurrentContacts();
  return contacts.length;
};

console.log(await countContacts());
