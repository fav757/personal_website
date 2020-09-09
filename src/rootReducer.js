import { CHANGE_THEME, CHANGE_LANGUAGE } from './rootActions';

function rootReducer(state, action) {
  switch (action.type) {
    case CHANGE_THEME: {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return { ...state, theme: newTheme };
    }
    case CHANGE_LANGUAGE: {
      const newLang = state.language === 'en' ? 'ru' : 'en';
      localStorage.setItem('language', newLang);
      return { ...state, language: newLang };
    }
    default:
      return state;
  }
}

export default rootReducer;
