const allFigures = [{ circle: true, color: 'green' }, { circle: true, color: 'red' }, { circle: false, color: 'black' },
{ circle: true, color: 'yellow' }, { circle: false, color: 'green' }, { circle: false, color: 'blue' }]


const reducer = (state = allFigures, action) => {
    switch (action.type) {
        
        case 'CIRCLE': {
            return state.filter((el)=> el.circle)
        }

        case 'SQUERE': {
            return state.filter((el)=> !el.circle)
        }

        default:
            return state;
    }
}

export default reducer;