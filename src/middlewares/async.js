export default ({dispatch}) => {
    //Return a function that gets called with next
    //the next function returns a function that gets called with the action
    //inside the action function we can do something with the action or
    //call next and pass the action along
    return next => action => {
        if(!action.payload || !action.payload.then) {
            return next(action);
        }

        //Create new action after promise resolves
        action.payload.then((response) => {
            //Keep all the properties of the old action, but replace the payload
            const newAction = {...action, payload: response.data};
            //Resend the action through all the middlewares again
            //This is important, if you have multiple middlewares
            dispatch(newAction);
        });
    };
};