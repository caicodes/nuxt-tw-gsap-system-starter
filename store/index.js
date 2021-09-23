export const state = () => ({
  currentThemeSkin: 'artasce',
  currentColorScheme: 'coolGray',
  currentColorMode: 'system',
  currentViewMode: 'comfort',
  viewModes: ['comfort', 'compact', 'cozy', 'contrast'],
  themeSkins: ['artasce', 'cai', 'sexy', 'rad', 'insta'],
  colorOptions: [
    'purple',
    'pink',
    'blue',
    'indigo',
    'orange',
    'red',
    'lime',
    'amber',
    'warmGray',
    'trueGray',
    'blueGray',
    'coolGray',
    'gray',
    'green',
    'rose',
    'violet',
    'cyan',
    'emerald',
    'fuchsia',
    'sky',
    'teal',
    'yellow',
  ],
})

export const mutations = {
  setThemeSkin(state, payload) {
    state.currentThemeSkin = payload
  },
  setColorScheme(state, payload) {
    state.currentColorScheme = payload
  },
  setColorMode(state, payload) {
    state.currentColorMode = payload
  },
  setViewMode(state, payload) {
    state.currentViewMode = payload
  },
}
/**
 *     this.themeSkin = this.$store.getters.getCurrentThemeSkin
    this.colorScheme = this.$store.getters.getCurrentColorScheme
    this.colorMode = this.$store.getters.getCurrentColorMode
    this.viewMode = this.$store.getters.getCurrentViewMode
 * 
 */
export const getters = {
  getCurrentColorMode: (state) => state.currentColorMode,
  getCurrentColorScheme: (state) => state.currentColorScheme,
  getCurrentThemeSkin: (state) => state.currentThemeSkin,
  getCurrentViewMode: (state) => state.currentViewMode,
}
