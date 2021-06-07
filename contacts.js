const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.relative("./", "./db/contacts.json");

async function listContacts() {
  let list;
  await fs
    .readFile(contactsPath, "utf8")
    .then((data) => {
      list = JSON.parse(data);
    })
    .catch((error) => console.error(error));
  console.table(list);
  return list;
}

async function getContactById(contactId) {
  try {
    let findContact;
    const allContacts = await listContacts();
    findContact = await allContacts.filter(
      (currentContact) => currentContact.id === contactId
    );
    console.log(findContact);
    return findContact;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    let newListAfterRemove;
    const allContacts = await listContacts();
    newListAfterRemove = allContacts.filter(
      (currentContact) => currentContact.id !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(newListAfterRemove));
    console.table(newListAfterRemove);
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
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
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
