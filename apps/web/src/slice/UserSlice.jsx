import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    users: [],
    loggedIn: false,
    
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser:(state, action)=>{
            state.users = [...state.users, action.payload];

        },
        logIn: (state, action)=>{
            state.users = [...state.users, action.payload];
            state.loggedIn = true;
        },
        isLog: (state, action)=>{
            state.loggedIn = true;
        },
        logOut: (state, action)=>{
            state.users = [];
            state.loggedIn = false;
        }
    }
});

const cartSlice = createSlice({
    name: "cart",
    initialCart: { 
        product: []
    },
    reducers:{
        addCart:(state, action)=>{
            state.product = [...state.product, action.payload];
        },
        removeCard:(state, action)=>{

        }
    }
})

export const {addUser, logIn, logOut, isLog} = userSlice.actions;

export default userSlice.reducer;