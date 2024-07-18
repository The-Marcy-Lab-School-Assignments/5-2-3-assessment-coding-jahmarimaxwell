class Phone {
  constructor(phoneNumber, model, contacts = []) {
    this.phoneNumber = phoneNumber;
    this.model = model;
    this.contacts = contacts;
  }

  addContact(contactName, contactNumber) {
    if (!contactName || !contactNumber) {
      return "Invalid";
    }
    if (typeof contactNumber !== 'string' || contactNumber.length !== 10 || !/^\d{10}$/.test(contactNumber)) {
      return "Invalid";
    }
    this.contacts.push({ name: contactName, phoneNumber: contactNumber });
    return `${contactName} added.`;
  }

  removeContact(contactName) {
    const index = this.contacts.findIndex(contact => contact.name === contactName);
    if (index === -1) {
      return "Contact not found.";
    }
    this.contacts.splice(index, 1);
    return "Contact removed successfully";
  }

  makeCall(contactNameOrNumber) {
    if (typeof contactNameOrNumber === 'string' && /^\d{10}$/.test(contactNameOrNumber)) {
      return `Calling ${contactNameOrNumber}...`;
    }
    const contact = this.contacts.find(contact => contact.name === contactNameOrNumber);
    if (!contact) {
      return "Invalid";
    }
    return `Calling ${contact.phoneNumber}...`;
  }
}

class AppleIPhone extends Phone {
  constructor(name, phoneNumber, contacts = []) {
    super(name, phoneNumber, contacts);
  }

  sendIMessage(contactNameOrNumber, message) {
    const contact = this.contacts.find(contact => contact.name === contactNameOrNumber || contact.phoneNumber === contactNameOrNumber);
    if (!contact) {
      return "Invalid contact";
    }
    if (contact.phoneNumber.startsWith('555')) {
      return `iMessage to ${contact.name}: ${message}`;
    }
    return `SMS to ${contact.name}: ${message}`;
  }
}


module.exports = {
  Phone,
  AppleIPhone,
};
