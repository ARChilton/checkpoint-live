export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU'

export const toggleSideMenu = (sideMenuOpen = false) => ({
  type: TOGGLE_SIDE_MENU,
  payload: { sideMenuOpen },
})

export const initialState = {
  sideMenuOpen: false,
}

const HomePageReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, ...payload }
    default:
      return state
  }
}

export const getSideMenuState = state => state.sideMenuOpen

export default HomePageReducer
