// Obtener el tema guardado en localStorage o usar la preferencia del sistema
const getInitialTheme = (): boolean => {
  const saved = localStorage.getItem('theme-preference');
  if (saved !== null) {
    return saved === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const state = {
  isDark: getInitialTheme()
};

const mutations = {
  setDarkMode(state: { isDark: boolean }, value: boolean) {
    state.isDark = value;
    // Guardar preferencia en localStorage
    localStorage.setItem('theme-preference', value ? 'dark' : 'light');
  }
};

const actions = {
  toggleTheme({ state, commit, dispatch }: { state: { isDark: boolean }, commit: Function, dispatch: Function }) {
    const newValue = !state.isDark;
    commit('setDarkMode', newValue);
    dispatch('updateTheme');
  },
  updateTheme({ state }: { state: { isDark: boolean }}) {
    // Remover temas existentes
    const links = document.querySelectorAll('link[data-theme]');
    links.forEach(link => link.remove());

    // Cargar el nuevo tema de PrimeVue
    const themeName = state.isDark ? 'lara-dark-blue' : 'lara-light-blue';
    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.href = `https://cdn.jsdelivr.net/npm/primevue@3/resources/themes/${themeName}/theme.css`;
    themeLink.setAttribute('data-theme', themeName);
    document.head.appendChild(themeLink);

    // Actualizar clases de Tailwind
    if (state.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Actualizar meta theme-color para navegadores móviles
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.setAttribute('content', state.isDark ? '#1f2937' : '#ffffff');
  },
  init({ state, commit, dispatch }: { state: { isDark: boolean }, commit: Function, dispatch: Function }) {
    // Aplicar el tema inicial
    dispatch('updateTheme');
    
    // Escuchar cambios en el tema del sistema (solo si no hay preferencia guardada)
    if (!localStorage.getItem('theme-preference')) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        commit('setDarkMode', e.matches);
        dispatch('updateTheme');
      });
    }
  }
};

const getters = {
  isDark: (state: { isDark: boolean }) => state.isDark
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};