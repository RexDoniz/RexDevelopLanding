<template>
  <div class="py-16 px-4 text-center">
    <h2 class="text-3xl font-bold text-indigo-600 mb-4">Contacto</h2>
    <p class="text-lg text-cyan-600 mb-8 max-w-2xl mx-auto">Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
    <div v-if="formSubmitted" class="max-w-md mx-auto bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-md">
      <h3 class="text-xl font-bold mb-2">¡Gracias por tu mensaje!</h3>
      <p>Nos pondremos en contacto contigo lo antes posible.</p>
      <button @click="resetForm" class="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors">Enviar otro mensaje</button>
    </div>
    <form v-else @submit.prevent="submitForm" aria-label="Formulario de contacto" class="max-w-lg mx-auto text-left bg-white p-8 rounded-lg shadow-md">
      <div class="mb-6">
        <label for="name" class="block mb-2 font-medium text-gray-700">Nombre</label>
        <input 
          type="text" 
          id="name" 
          v-model="form.name" 
          required 
          aria-required="true"
          class="w-full p-3 border rounded-md"
          :class="{ 'border-red-500': errors.name }"
        />
        <span v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</span>
      </div>
      <div class="mb-6">
        <label for="email" class="block mb-2 font-medium text-gray-700">Correo Electrónico</label>
        <input 
          type="email" 
          id="email" 
          v-model="form.email" 
          required 
          aria-required="true"
          class="w-full p-3 border rounded-md"
          :class="{ 'border-red-500': errors.email }"
        />
        <span v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</span>
      </div>
      <div class="mb-6">
        <label for="message" class="block mb-2 font-medium text-gray-700">Mensaje</label>
        <textarea 
          id="message" 
          v-model="form.message" 
          rows="5" 
          required
          aria-required="true"
          class="w-full p-3 border rounded-md"
          :class="{ 'border-red-500': errors.message }"
        ></textarea>
        <span v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</span>
      </div>
      <button type="submit" :disabled="isSubmitting" class="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-400 transition-colors">
        <span v-if="isSubmitting">Enviando...</span>
        <span v-else>Enviar</span>
      </button>
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