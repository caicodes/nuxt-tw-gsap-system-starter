export const state = () => ({
  themeSkin: "ascend",
  colorScheme: "ascendBlue",
  colorMode: "system",
  viewMode: "comfort"
});

export const mutations = {
  setThemeSkin(state, newThemeSkin) {
    state.themeSkin = newThemeSkin;
  },
  setColorScheme(state, newColorScheme) {
    state.colorScheme = newColorScheme;
  },
  setColorMode(state, newColorMode) {
    state.colorMode = newColorMode;
  },
  setViewMode(state, newViewMode) {
    state.viewMode = newViewMode;
  }
};
