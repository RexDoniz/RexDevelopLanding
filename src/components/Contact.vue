<template>
  <div class="contact-page">
    <h2>Contacto</h2>
    <p>Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
    <div v-if="formSubmitted" class="form-success">
      <h3>¡Gracias por tu mensaje!</h3>
      <p>Nos pondremos en contacto contigo lo antes posible.</p>
      <button @click="resetForm" class="btn-reset">Enviar otro mensaje</button>
    </div>
    <form v-else @submit.prevent="submitForm" aria-label="Formulario de contacto">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input 
          type="text" 
          id="name" 
          v-model="form.name" 
          required 
          aria-required="true"
          :class="{ 'input-error': errors.name }"
        />
        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico</label>
        <input 
          type="email" 
          id="email" 
          v-model="form.email" 
          required 
          aria-required="true"
          :class="{ 'input-error': errors.email }"
        />
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
      </div>
      <div class="form-group">
        <label for="message">Mensaje</label>
        <textarea 
          id="message" 
          v-model="form.message" 
          rows="5" 
          required
          aria-required="true"
          :class="{ 'input-error': errors.message }"
        ></textarea>
        <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
      </div>
      <button type="submit" :disabled="isSubmitting">
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

<style scoped>
@import '../assets/variables.css';

.contact-page {
  padding-top: 80px;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Add background effect similar to Home.vue */
.contact-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(255, 102, 153, 0.05) 0%, rgba(42, 42, 42, 0) 70%);
  z-index: -1;
}

.contact-page h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
}

/* Add decorative underline like in Home.vue */
.contact-page h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--color-accent);
}

.contact-page p {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: var(--color-secondary);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

form {
  max-width: 550px;
  margin: 0 auto;
  text-align: left;
  background-color: var(--color-background);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Add decorative top border that appears on hover */
form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

form:hover::before {
  transform: scaleX(1);
}

form:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 2rem;
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 500;
  color: var(--color-secondary);
  transition: color 0.3s ease;
}

.form-group:hover label {
  color: var(--color-primary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.form-group input:hover,
.form-group textarea:hover {
  border-color: var(--color-secondary);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(255, 102, 153, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
}

.input-error {
  border-color: var(--color-accent) !important;
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  10%, 90% { transform: translateX(-1px); }
  20%, 80% { transform: translateX(2px); }
  30%, 50%, 70% { transform: translateX(-4px); }
  40%, 60% { transform: translateX(4px); }
}

.error-message {
  color: var(--color-accent);
  font-size: 0.85rem;
  margin-top: 0.5rem;
  display: block;
  animation: fadeIn 0.3s ease-in-out;
}

button {
  padding: 0.9rem 1.8rem;
  background-color: var(--color-primary);
  color: white;
  border: 2px solid transparent;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  min-width: 150px;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-secondary);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}

button:hover:not(:disabled)::before {
  transform: scaleX(1);
  transform-origin: left;
}

button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
}

button:active:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

button:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
  opacity: 0.7;
}

.form-success {
  background-color: rgba(51, 109, 89, 0.1);
  border: 2px solid var(--color-detail);
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  max-width: 550px;
  margin: 0 auto;
  animation: fadeIn 0.6s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

.form-success::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: var(--color-detail);
}

.form-success h3 {
  color: var(--color-detail);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.btn-reset {
  background-color: var(--color-detail);
  margin-top: 1.5rem;
}

.btn-reset:hover {
  border-color: var(--color-detail);
}

.btn-reset::before {
  background-color: transparent;
}

.btn-reset:hover:not(:disabled) {
  background-color: transparent;
  color: var(--color-detail);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-page {
    padding: 3rem 1.5rem;
  }
  
  .contact-page h2 {
    font-size: 2rem;
  }
  
  form, .form-success {
    padding: 1.5rem;
  }
  
  button {
    width: 100%;
  }
}
</style>