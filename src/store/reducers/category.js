import { handleActions } from 'redux-actions'
import { LOAD_CATEGORY } from '../types/category'

export default handleActions({
  [LOAD_CATEGORY] (state, action) {
    return action.payload
  }
}, {})
