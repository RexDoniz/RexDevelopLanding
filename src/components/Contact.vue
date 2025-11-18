<template>
  <div class="py-24 px-4 md:px-8 text-center min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16 reveal">
        <h2 class="text-5xl md:text-6xl font-bold gradient-text mb-6">Contacto</h2>
        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Completa el formulario y te redirigiremos a WhatsApp para enviarnos tu mensaje. 
          Te responderemos en menos de 24 horas.
        </p>
      </div>

      <Toast />
      
      <div v-if="formSubmitted" class="max-w-2xl mx-auto reveal">
        <Card class="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-elegant-lg">
          <template #content>
            <div class="text-center py-10">
              <div class="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i class="pi pi-check-circle text-5xl text-white"></i>
              </div>
              <h3 class="text-3xl font-bold text-gray-800 mb-4">¡Redirigiendo a WhatsApp!</h3>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">Si no se abrió automáticamente, puedes cerrar esta ventana y enviar tu mensaje manualmente.</p>
              <Button 
                @click="resetForm" 
                label="Enviar otro mensaje" 
                icon="pi pi-plus" 
                severity="success" 
                rounded
                size="large"
                class="px-8 py-3 text-lg"
              />
            </div>
          </template>
        </Card>
      </div>

      <div v-else class="grid md:grid-cols-2 gap-10">
        <!-- Formulario -->
        <Card class="reveal shadow-elegant hover:shadow-elegant-lg transition-all duration-500 rounded-2xl border border-gray-100">
          <template #title>
            <div class="flex items-center gap-4 p-2">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <i class="pi pi-send text-2xl text-white"></i>
              </div>
              <div class="text-left">
                <h3 class="text-2xl font-bold text-indigo-600">Envíanos un mensaje</h3>
                <p class="text-sm text-gray-500 mt-1">Completa el formulario y te redirigiremos a WhatsApp</p>
              </div>
            </div>
          </template>
          <template #content>
            <form 
              @submit.prevent="submitForm" 
              aria-label="Formulario de contacto" 
              class="space-y-6 p-2"
            >
              <div>
                <label for="name" class="block mb-2 font-semibold text-gray-700">
                  Nombre completo <span class="text-red-500">*</span>
                </label>
                <InputText
                  id="name"
                  v-model="form.name"
                  placeholder="Tu nombre"
                  required
                  aria-required="true"
                  class="w-full"
                  :class="{ 'p-invalid': errors.name }"
                />
                <small v-if="errors.name" class="p-error">{{ errors.name }}</small>
              </div>

              <div>
                <label for="service" class="block mb-2 font-semibold text-gray-700">
                  Servicio de interés <span class="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  required
                  aria-required="true"
                  class="w-full p-inputtext p-component"
                  :class="{ 'p-invalid': errors.service }"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="development">Desarrollo y TI</option>
                  <option value="accounting">Contabilidad</option>
                  <option value="marketing">Marketing Digital</option>
                </select>
                <small v-if="errors.service" class="p-error">{{ errors.service }}</small>
              </div>

              <div>
                <label for="message" class="block mb-2 font-semibold text-gray-700">
                  Mensaje <span class="text-red-500">*</span>
                </label>
                <InputTextarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                  aria-required="true"
                  class="w-full"
                  :class="{ 'p-invalid': errors.message }"
                />
                <small v-if="errors.message" class="p-error">{{ errors.message }}</small>
                <small class="text-gray-500">{{ form.message.length }}/500 caracteres</small>
              </div>

              <Button
                type="submit"
                :loading="isSubmitting"
                severity="success"
                class="w-full"
                size="large"
                :disabled="isSubmitting"
              >
                <template #icon>
                  <i class="fab fa-whatsapp mr-2"></i>
                </template>
                {{ isSubmitting ? 'Abriendo WhatsApp...' : 'Enviar por WhatsApp' }}
              </Button>
            </form>
          </template>
        </Card>

        <!-- Información de contacto -->
        <div class="space-y-8 reveal" style="animation-delay: 0.1s">
          <Card class="shadow-elegant hover:shadow-elegant-lg transition-all duration-500 rounded-2xl border border-gray-100">
            <template #title>
              <div class="flex items-center gap-4 p-2">
                <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <i class="pi pi-info-circle text-2xl text-white"></i>
                </div>
                <div class="text-left">
                  <h3 class="text-2xl font-bold text-indigo-600">Información de contacto</h3>
                  <p class="text-sm text-gray-500 mt-1">Datos de contacto</p>
                </div>
              </div>
            </template>
            <template #content>
              <div class="space-y-6 p-2">
                <div class="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-110 transition-transform">
                    <i class="pi pi-map-marker text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-1">Ubicación</h4>
                    <p class="text-gray-600">Loma Dorada, Tonalá, Jalisco</p>
                    <p class="text-gray-600">Guadalajara, Jalisco</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-110 transition-transform">
                    <i class="pi pi-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:hola@rexdevelop.com" class="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors">
                      hola@rexdevelop.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md hover:scale-110 transition-transform">
                    <i class="fab fa-whatsapp text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/523325557689" 
                      target="_blank"
                      class="text-green-600 hover:text-green-700 hover:underline transition-colors"
                    >
                      +52 33 2555 7689
                    </a>
                  </div>
                </div>
              </div>
            </template>
          </Card>

          <Card class="bg-gradient-to-br from-indigo-50 via-cyan-50 to-pink-50 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 rounded-2xl border border-gray-100">
            <template #content>
              <div class="text-center py-8">
                <div class="w-20 h-20 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <i class="pi pi-clock text-white text-3xl"></i>
                </div>
                <h4 class="font-bold text-indigo-600 mb-6 text-xl">Horario de atención</h4>
                <div class="space-y-4">
                  <div class="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-xl">
                    <i class="pi pi-calendar text-2xl text-indigo-500"></i>
                    <p class="text-gray-700 font-semibold text-lg">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                  <div class="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-xl">
                    <i class="pi pi-calendar text-2xl text-cyan-500"></i>
                    <p class="text-gray-700 font-semibold text-lg">
                      Sábados: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import { useToast } from 'primevue/usetoast'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import InputTextarea from 'primevue/textarea'
import Button from 'primevue/button'
import Toast from 'primevue/toast'

const toast = useToast()

const form = reactive({
  name: '',
  service: '',
  message: ''
})

const errors = reactive({
  name: '',
  service: '',
  message: ''
})

// Números de WhatsApp por servicio
const whatsappNumbers = {
  development: '523325557689', // Desarrollo y TI
  accounting: '523325557689', // Contabilidad
  marketing: '523325557689'  // Marketing Digital
}

// Nombres de servicios para el mensaje
const serviceNames = {
  development: 'Desarrollo y TI',
  accounting: 'Contabilidad',
  marketing: 'Marketing Digital'
}

const isSubmitting = ref(false)
const formSubmitted = ref(false)

function validateForm() {
  let isValid = true
  
  errors.name = ''
  errors.service = ''
  errors.message = ''
  
  if (!form.name.trim()) {
    errors.name = 'El nombre es requerido'
    isValid = false
  } else if (form.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres'
    isValid = false
  }
  
  if (!form.service) {
    errors.service = 'Debes seleccionar un servicio'
    isValid = false
  }
  
  if (!form.message.trim()) {
    errors.message = 'El mensaje es requerido'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
    isValid = false
  } else if (form.message.length > 500) {
    errors.message = 'El mensaje no puede exceder 500 caracteres'
    isValid = false
  }
  
  return isValid
}

function submitForm() {
  if (!validateForm()) {
    toast.add({
      severity: 'error',
      summary: 'Error de validación',
      detail: 'Por favor corrige los errores en el formulario',
      life: 3000
    })
    return
  }
  
  isSubmitting.value = true
  
  try {
    // Obtener el número de WhatsApp según el servicio
    const whatsappNumber = whatsappNumbers[form.service as keyof typeof whatsappNumbers]
    const serviceName = serviceNames[form.service as keyof typeof serviceNames]
    
    // Formatear el mensaje para WhatsApp
    const whatsappMessage = `Hola, soy *${form.name.trim()}*%0A%0A` +
      `*Servicio de interés:* ${serviceName}%0A%0A` +
      `*Mensaje:*%0A${encodeURIComponent(form.message.trim())}`
    
    // Crear la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank')
    
    toast.add({
      severity: 'success',
      summary: '¡Redirigiendo a WhatsApp!',
      detail: 'Se abrirá WhatsApp con tu mensaje prellenado',
      life: 3000
    })
    
    // Mostrar mensaje de confirmación después de un breve delay
    setTimeout(() => {
      formSubmitted.value = true
      isSubmitting.value = false
    }, 500)
  } catch (error) {
    isSubmitting.value = false
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Hubo un problema al abrir WhatsApp. Por favor intenta de nuevo.',
      life: 3000
    })
  }
}

function resetForm() {
  form.name = ''
  form.service = ''
  form.message = ''
  formSubmitted.value = false
  Object.keys(errors).forEach(key => errors[key] = '')
}

// Animaciones de entrada
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        if (observer) observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal').forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>