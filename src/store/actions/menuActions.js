export const menuActions = {
  GET_MENU_STARTED: 'GET_MENU_STARTED',
  GET_MENU_SUCCESS: 'GET_MENU_SUCCESS',
  GET_MENU_FAILURE: 'GET_MENU_STARTED',
}

export const getMenu = () => {
  return async (dispatch) => {
    dispatch(getDataStarted())

    try {
      const jsonData = await fetch('http://localhost:4000/menu')
      const data = await jsonData.json()

      dispatch(getDataSuccess(data.categories))
    } catch (err) {
      dispatch(getDataFailure(err.message))
    }
  }
}

const getDataSuccess = (data) => ({
  type: menuActions.GET_MENU_SUCCESS,
  payload: data,
})

const getDataStarted = () => ({
  type: menuActions.GET_MENU_STARTED,
})

const getDataFailure = (error) => ({
  type: menuActions.GET_MENU_FAILURE,
  payload: {
    error,
  },
})
