const state = {
  isDark: window.matchMedia('(prefers-color-scheme: dark)').matches
};

const mutations = {
  setDarkMode(state: { isDark: boolean }, value: boolean) {
    state.isDark = value;
  }
};

const actions = {
  toggleTheme({ state, commit }: { state: { isDark: boolean }, commit: Function }) {
    commit('setDarkMode', !state.isDark);
    actions.updateTheme({ state });
  },
  updateTheme({ state }: { state: { isDark: boolean }}) {
    // Remover temas existentes
    const links = document.querySelectorAll('link[data-theme]');
    links.forEach(link => link.remove());

    // Cargar el nuevo tema
    const themeName = state.isDark ? 'lara-dark-blue' : 'lara-light-blue';
    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.href = `https://cdn.jsdelivr.net/npm/primevue@3/resources/themes/${themeName}/theme.css`;
    themeLink.setAttribute('data-theme', themeName);
    document.head.appendChild(themeLink);

    // Actualizar clases de Tailwind
    document.documentElement.classList.toggle('dark', state.isDark);
  },
  init({ state, dispatch }: { state: { isDark: boolean }, dispatch: Function }) {
    dispatch('updateTheme');
    
    // Escuchar cambios en el tema del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      dispatch('setDarkMode', e.matches);
      dispatch('updateTheme');
    });
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