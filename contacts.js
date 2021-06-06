const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.relative("./", "./db/contacts.json");

async function listContacts() {
  let list;
  await fs.readFile(contactsPath, "utf8").then((data) => {
    list = JSON.parse(data);
  });
  console.table(list);
  return list;
}

async function getContactById(contactId) {
  let findContact;
  const allContacts = await listContacts();
  findContact = await allContacts.filter(
    (currentContact) => currentContact.id === contactId
  );
  console.log(findContact);
  return findContact;
}

async function removeContact(contactId) {
  let newListAfterRemove;
  const allContacts = await listContacts();
  newListAfterRemove = allContacts.filter(
    (currentContact) => currentContact.id !== contactId
  );
  await fs.writeFile(contactsPath, JSON.stringify(newListAfterRemove));
  console.table(newListAfterRemove);
}

async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  let newContact = {
    id: shortid.generate(),
    name: name,
    email: email,
    phone: phone,
  };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  console.table(allContacts);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
