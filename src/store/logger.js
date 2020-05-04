const logger = store => {
    return next => {
        return action => {
            console.log('[MIDDLEWARE] dispatching', action);
            const result = next(action);
            console.log('[MIDDLEWARE] next state', store.getState());
            return result;
        }
    }
}

export default logger;