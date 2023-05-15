// sent email
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')

const sentEmail = (e) => {
    e.preventDefault()

    // chick if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        // add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')
        // show message
        contactMessage.textContent = 'Write all the input fields 😒'
    } else {
        // service_id | template id |form | publickay
        emailjs.sentForm('template_7aa34f3', 'template_b5xd76q', '#contact-form', 'Gr0V2UqjYbOulPXAK')
            .then(() => {
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent ❤️'

                setTimeout(() =>{
                    contactMessage.textContent = ''
                },5000)
            }, (error) =>{
                alert('OOps! some thing has faild')
            })
    }
}
contactForm.addEventListener('submit', sentEmail)