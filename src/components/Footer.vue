<template>
  <footer role="contentinfo" aria-label="Pie de página">
    <div class="footer-content">
      <div class="footer-logo">
        <h3 class="company-name">RexDevelop</h3>
        <p class="tagline">Soluciones digitales innovadoras</p>
      </div>
      <div class="social-container">
        <h4>Síguenos</h4>
        <div class="social-buttons">
          <a href="https://www.facebook.com/rexdevelop" target="_blank" rel="noopener noreferrer" class="social-button facebook" aria-label="Facebook">
            <i class="fab fa-facebook-f" aria-hidden="true"></i>
            <span class="sr-only">Facebook</span>
          </a>
          <a href="https://twitter.com/rexdevelop" target="_blank" rel="noopener noreferrer" class="social-button twitter" aria-label="Twitter/X">
            <i class="fab fa-x-twitter" aria-hidden="true"></i>
            <span class="sr-only">Twitter/X</span>
          </a>
          <a href="https://www.instagram.com/rexdevelop" target="_blank" rel="noopener noreferrer" class="social-button instagram" aria-label="Instagram">
            <i class="fab fa-instagram" aria-hidden="true"></i>
            <span class="sr-only">Instagram</span>
          </a>
          <a href="mailto:hola@rexdevelop.com" target="_blank" rel="noopener noreferrer" class="social-button mail" aria-label="Email">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            <span class="sr-only">Email</span>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="copyright">&copy; {{ new Date().getFullYear() }} RexDevelop. Todos los derechos reservados.</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Si quieres que el año sea dinámico en Vue3:
</script>

<style scoped>
@import '../assets/variables.css';

footer {
  backdrop-filter: blur(14px) saturate(130%);
  background: rgba(34, 39, 54, 0.79);
  color: #fff;
  border-radius: 16px 16px 0 0;
  padding: 0.5rem 2rem 0.15rem;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: min(100%, 900px);
  box-shadow: 0 -6px 36px 4px rgba(25, 21, 56, 0.12), 0 -2px 20px rgba(70,255,255,0.06);
  z-index: 50;
  box-sizing: border-box;
  border-top: 1.5px solid var(--color-accent);
  border-left: 0.5px solid rgba(255,255,255,0.01);
  border-right: 0.5px solid rgba(255,255,255,0.01);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.4rem;
  text-align: left;
  gap: 1rem;
}

.footer-logo {
  flex: 1;
  min-width: 170px;
  margin-bottom: 0.25rem;
}

.company-name {
  color: var(--color-primary);
  margin: 0 0 0.1rem;
  font-size: 1.22rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  letter-spacing: 2px;
  animation: flicker 2.2s infinite alternate;
  filter: drop-shadow(0 0 3px var(--color-primary));
}

.tagline {
  color: var(--color-accent);
  margin: 0;
  font-size: 0.78rem;
  font-style: italic;
  opacity: 0.8;
  letter-spacing: 1px;
}

.social-container {
  flex: 1;
  min-width: 170px;
  margin-bottom: 0.25rem;
  text-align: right;
}

.social-container h4 {
  color: var(--color-primary);
  margin: 0 0 0.15rem;
  font-size: 0.98rem;
  letter-spacing: 0.5px;
}

.social-buttons {
  display: flex;
  gap: 14px;
  justify-content: flex-end;
}

.social-button {
  text-decoration: none;
  font-size: 1.13rem;
  color: var(--color-primary);
  background: rgba(255,255,255,0.06);
  transition:
    color 0.2s,
    box-shadow 0.28s cubic-bezier(0.4,0,0.2,1),
    background 0.28s cubic-bezier(0.4,0,0.2,1),
    transform 0.18s cubic-bezier(0.4,0,0.2,1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0 2px 10px 0 rgba(77, 180, 255, 0.09);
  border: 1.5px solid transparent;
  opacity: 0.88;
}
.social-button.facebook:hover    { color: #fff; background: linear-gradient(135deg,#3b5998 55%,var(--color-accent) 100%); border-color: #3b5998; }
.social-button.twitter:hover     { color: #fff; background: linear-gradient(135deg,#111 65%,var(--color-accent) 100%); border-color: #111; }
.social-button.instagram:hover   { color: #fff; background: linear-gradient(135deg,#d6249f 30%,#285AEB 80%); border-color: #d6249f; }
.social-button.mail:hover        { color: #fff; background: linear-gradient(135deg,#12c2e9 30%,#c471ed 80%); border-color: #12c2e9; }
.social-button:hover {
  opacity: 1;
  box-shadow: 0 4px 16px 0 var(--color-accent), 0 2px 14px 0 var(--color-primary);
  transform: scale(1.09) translateY(-2px) rotate(-2deg);
}

.footer-bottom {
  border-top: 1.5px solid rgba(255,255,255,0.12);
  padding-top: 0.23rem;
  text-align: center;
}

.copyright {
  color: #fff;
  font-size: 0.73rem;
  opacity: 0.74;
  letter-spacing: 1px;
}

.sr-only {
  position: absolute !important;
  height: 1px; width: 1px; overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px); white-space: nowrap;
}

@keyframes flicker {
  0%, 100% { opacity: 1; text-shadow: 0 0 5px var(--color-accent); }
  60% { opacity: 0.7; text-shadow: 0 0 12px var(--color-primary); }
}

@media (max-width: 700px) {
  footer {
    border-radius: 10px 10px 0 0;
    padding: 0.6rem 0.4rem 0.14rem;
    width: 100vw;
    left: 0;
    transform: none;
    min-width: 0;
  }
  .footer-content {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    gap: 0.5rem;
  }
  .social-buttons { justify-content: center; }
  .social-button { width: 40px; height: 40px; font-size: 1.2rem; }
  .footer-logo, .social-container { text-align: center; }
}
</style>
