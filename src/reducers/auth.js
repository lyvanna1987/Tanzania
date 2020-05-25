export const LOGIN = 'THEME_OPTIONS/SET_ENABLE_PAGETITLE_ICON';
export const LOGOUT = 'THEME_OPTIONS/SET_ENABLE_PAGETITLE_ICON';

export const login = () => ({
    type: LOGIN
});

export const logout = () => {
    delete localStorage.currentUser
    delete localStorage.email
    delete localStorage.password
    delete localStorage.token
    return({
            type: LOGOUT
    })
}

const initialState = {
    login: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            console.log('redux logout2')
            return Object.assign({}, state, {
                login:true
            });
        case LOGOUT:
            console.log('redux logout2')
            return Object.assign({}, state, {
                login:false
            });
        default:
            return state;
    }
};