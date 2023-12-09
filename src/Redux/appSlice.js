import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        isSideBarOpen: false,
    },
    reducers: {
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        openMenu: (state) =>{
            state.isMenuOpen = true;
        },
        closeMenu : (state) =>{
            state.isMenuOpen = false;
        },
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
    }
});

export const { toggleMenu, openMenu, closeMenu, toggleSideBar } = appSlice.actions;
export default appSlice.reducer;