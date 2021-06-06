const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.relative("./", "./db/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  let list;
  await fs.readFile(contactsPath, "utf8").then((data) => {
    list = JSON.parse(data);
  });
  console.log(list);
  return list;
}
//listContacts();

async function getContactById(contactId) {
  let findContact;
  const allContacts = await listContacts();
  findContact = await allContacts.filter(
    (currentContact) => currentContact.id === contactId
  );
  console.log(findContact);
  return findContact;
}
//getContactById(7);

async function removeContact(contactId) {
  // ...твой код
  let newListAfterRemove;
  const allContacts = await listContacts();
  newListAfterRemove = allContacts.filter(
    (currentContact) => currentContact.id !== contactId
  );
  await fs.writeFile(contactsPath, JSON.stringify(newListAfterRemove));
  console.log(newListAfterRemove);
}

//removeContact(3);

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
  console.log(allContacts);
  // ...твой код
}
//addContact("John", "john@email", "777-77-77");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
