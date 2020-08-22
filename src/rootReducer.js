import { CHANGE_THEME } from './rootActions';

function rootReducer(state, action) {
  switch (action.type) {
    case CHANGE_THEME: {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      return { ...state, theme: newTheme };
    }
    default:
      return state;
  }
}

export default rootReducer;
