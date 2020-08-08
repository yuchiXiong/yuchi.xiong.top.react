const defaultState = [
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS3', count: 20 },
    { value: 'Ruby', count: 38 },
    { value: 'Ruby on Rails', count: 30 },
    { value: 'Vue', count: 28 },
    { value: 'Koa.js', count: 25 },
    { value: 'XML', count: 33 },
    { value: 'PostgreSQL', count: 18 },
    { value: 'Sass/Scss', count: 20 },
];

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;