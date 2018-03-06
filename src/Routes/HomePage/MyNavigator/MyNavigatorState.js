import { RouterUtil } from 'react-onsenui'
// import { onsenuiPageListing } from '../HomePage'
// import MenuPage from '../MenuPage/MenuPage'

export const PUSH_PAGE = 'PUSH_PAGE'
export const POST_PUSH = 'POST_PUSH'
export const POP_PAGE = 'POP_PAGE'
export const POST_POP = 'POST_POP'

export const pushPage = route => ({
  type: PUSH_PAGE,
  route,
})

export const postPush = () => ({
  type: POST_PUSH,
})

export const popPage = () => ({
  type: POP_PAGE,
})

export const postPop = () => ({
  type: POST_POP,
})

const initialState = RouterUtil.init([{
  component: 'MenuPage',
  props: {
    key: 'main',
  },
}])

const NavigatorReducer = (state = initialState, action) => {
  const { type } = action
  let routeConfig
  switch (type) {
    case PUSH_PAGE: {
      const { route } = action
      console.log(route)
      routeConfig = state
      return RouterUtil.push({ routeConfig, route })
    }
    case POST_PUSH:
      return RouterUtil.postPush(state)
    case POP_PAGE:
      routeConfig = state
      return RouterUtil.pop({ routeConfig })
    case POST_POP:
      return RouterUtil.postPop(state)
    default:
      return state
  }
}

export const getRouteConfig = state => state

export default NavigatorReducer
