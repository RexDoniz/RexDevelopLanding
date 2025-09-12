<template>
  <div class="py-16 px-4 text-center">
    <h2 class="text-3xl font-bold text-indigo-600 mb-4">Contacto</h2>
    <p class="text-lg text-cyan-600 mb-8 max-w-2xl mx-auto">Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
    <Toast />
    <div v-if="formSubmitted" class="max-w-md mx-auto">
      <Message severity="success" :life="3000">
        <template #messageicon><i class="pi pi-check-circle"></i></template>
        <h3 class="text-xl font-bold mb-2">¡Gracias por tu mensaje!</h3>
        <p>Nos pondremos en contacto contigo lo antes posible.</p>
      </Message>
      <Button @click="resetForm" label="Enviar otro mensaje" icon="pi pi-plus" severity="success" class="mt-4" />
    </div>
    <form v-else @submit.prevent="submitForm" aria-label="Formulario de contacto" class="max-w-lg mx-auto text-left p-8">
      <Card>
        <template #content>
          <div class="mb-6">
            <label for="name" class="block mb-2 font-medium text-gray-700">Nombre</label>
            <InputText
              id="name"
              v-model="form.name"
              required
              aria-required="true"
              class="w-full"
              :class="{ 'p-invalid': errors.name }"
            />
            <small v-if="errors.name" class="p-error">{{ errors.name }}</small>
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 font-medium text-gray-700">Correo Electrónico</label>
            <InputText
              type="email"
              id="email"
              v-model="form.email"
              required
              aria-required="true"
              class="w-full"
              :class="{ 'p-invalid': errors.email }"
            />
            <small v-if="errors.email" class="p-error">{{ errors.email }}</small>
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 font-medium text-gray-700">Mensaje</label>
            <InputTextarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              aria-required="true"
              class="w-full"
              :class="{ 'p-invalid': errors.message }"
            />
            <small v-if="errors.message" class="p-error">{{ errors.message }}</small>
          </div>
          <Button
            type="submit"
            :loading="isSubmitting"
            :label="isSubmitting ? 'Enviando...' : 'Enviar'"
            icon="pi pi-send"
            severity="primary"
            class="w-full"
          />
        </template>
      </Card>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const formSubmitted = ref(false)

function validateForm() {
  let isValid = true
  
  // Reset errors
  errors.name = ''
  errors.email = ''
  errors.message = ''
  
  // Validate name
  if (!form.name.trim()) {
    errors.name = 'El nombre es requerido'
    isValid = false
  } else if (form.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres'
    isValid = false
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'El correo electrónico es requerido'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Por favor ingresa un correo electrónico válido'
    isValid = false
  }
  
  // Validate message
  if (!form.message.trim()) {
    errors.message = 'El mensaje es requerido'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
    isValid = false
  }
  
  return isValid
}

function submitForm() {
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  // Simulate API call with a timeout
  setTimeout(() => {
    console.log('Formulario enviado', form)
    // En un caso real, aquí se enviaría el formulario a un servidor
    isSubmitting.value = false
    formSubmitted.value = true
  }, 1500)
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.message = ''
  formSubmitted.value = false
}
</script>