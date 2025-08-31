export function sendMail() {
  const email = ref('')
  const phone = ref('')
  const name = ref('')
  const isSuccess = ref(false)

const resetForm = () => {
  email.value = ''
  phone.value = ''
  name.value = ''
}

  const handleSubmit = async (email: string, phone: string, name: string) => {
try {
  resetForm()
  const mail = useMail()
  await mail.send({
    to: 'info@kaskavellaplus.ru',
        subject: 'Новая заявка с сайта "kaskavellaplus.ru"',
        html: `
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
        `,
  })
  isSuccess.value = true

  setTimeout(() => {
    isSuccess.value = false
  }, 3000)
} catch (error) {
  console.error(error)
}
  }

  return {
    email,
    phone,
    name,
    isSuccess,
    handleSubmit,
    resetForm
  }
}
