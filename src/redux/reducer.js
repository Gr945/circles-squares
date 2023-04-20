const initialState = [
    { circle: true, color: 'green', dark: true },
    { circle: true, color: 'red', dark: true },
    { circle: false, color: 'red', dark: true },
    { circle: true, color: 'yellow', dark: true },
    { circle: false, color: 'green', dark: true },
    { circle: true, color: 'blue', dark: true },
    { circle: false, color: 'blue', dark: true },
    { circle: false, color: 'yellow', dark: true },

    { circle: true, color: 'greenyellow', dark: false },
    { circle: true, color: 'rosybrown', dark: false },
    { circle: false, color: 'rosybrown', dark: false },
    { circle: true, color: 'yellowgreen', dark: false },
    { circle: false, color: 'greenyellow', dark: false },
    { circle: true, color: 'blueviolet', dark: false },
    { circle: false, color: 'blueviolet', dark: false },
    { circle: false, color: 'yellowgreen', dark: false },
]


const reducer = (state = initialState, action) => {
    switch (action.type) {

        // case 'CIRCLE': {
        //     return state.filter((el) => el.circle)
        // }

        // case 'SQUERE': {
        //     return state.filter((el) => !el.circle)
        // }

        default:
            return state;
    }
}

export default reducer;