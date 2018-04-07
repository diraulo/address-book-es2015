const renderContacts = () => {
  let contacts = JSON.parse(window.localStorage.getItem('contacts'))
  let div = document.querySelector('.contact-list')
  div.innerHTML = ''

  if (contacts) {
    let ul = document.createElement('ul')

    let items = contacts.map(contact => {
      let li = document.createElement('li')
      li.innerHTML = `
        <span>${contact.name}</span> |
        <span>${contact.phone}</span> |
        <span>
          <a href="https://twitter.com/${contact.twitter}">@${
        contact.twitter
      }</a>
        </span>
      `
      return li
    })

    items.forEach(li => ul.appendChild(li))
    div.appendChild(ul)
  } else {
    div.innerHTML = `<p>You have no contacts in your address book</p>`
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderContacts()
  // Hide form on start
  const addContactForm = document.querySelector('.new-contact-form')

  // bind actions to buttons
  const btnAddContact = document.querySelector('.add-contact')
  const btnCancelAddContact = document.querySelector('.hide-form')
  const btnSaveContact = document.querySelector('.save-contact')

  btnAddContact.addEventListener('click', () => {
    addContactForm.classList.remove('hide')
    btnCancelAddContact.classList.remove('hide')
    btnAddContact.classList.add('hide')
  })

  btnCancelAddContact.addEventListener('click', () => {
    addContactForm.classList.add('hide')
    btnCancelAddContact.classList.add('hide')
    btnAddContact.classList.remove('hide')
  })

  addContactForm.addEventListener('submit', event => {
    event.preventDefault()
    const localStorage = window.localStorage

    let {
      name,
      email,
      phone,
      company,
      notes,
      twitter,
    } = addContactForm.elements

    let contact = {
      id: Date.now(),
      name: name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      notes: notes.value,
      twitter: twitter.value,
    }

    console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
    localStorage.setItem('contacts', JSON.stringify([contact]))
    renderContacts()
  })
})
