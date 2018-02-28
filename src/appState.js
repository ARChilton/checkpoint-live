import PouchDB from 'pouchdb'

export const SET_EVENT_DESCRIPTION = 'SET_EVENT_DESCRIPTION'

export const setEventDescription = eventDescription => ({
  type: SET_EVENT_DESCRIPTION,
  payload: { eventDescription },
})

export const importEventDescription = db => (dispatch) => {
  const localDb = new PouchDB(db)
  return localDb.get('eventDescription')
    .then(doc => dispatch(setEventDescription(doc)))
}

export const initialState = {}


const appReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_EVENT_DESCRIPTION:
      return { ...state, ...payload }
    default:
      return state
  }
}


export default appReducer

