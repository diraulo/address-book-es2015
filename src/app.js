document.addEventListener('DOMContentLoaded', () => {
  // Hide form on start
  const addContactForm = document.querySelector('.new-contact-form')

  // bind actions to buttons
  const btnAddContact = document.querySelector('.add-contact')
  const btnCancelAddContact = document.querySelector('.hide-form')
  const btnSaveContact = document.querySelector('.save-contact')

  btnAddContact.addEventListener('click', () => {
    // Show the form
    addContactForm.classList.remove('hide')

    // Show cancel button
    btnCancelAddContact.classList.remove('hide')

    // Hide Add button
    btnAddContact.classList.add('hide')
  })

  btnCancelAddContact.addEventListener('click', () => {
    // hide the form
    addContactForm.classList.add('hide')

    // hide cancel button
    btnCancelAddContact.classList.add('hide')

    // Show Add button
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
  })
})
