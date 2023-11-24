import {ShopPageState} from "./types";
import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {getAllProductsAsyncAction} from "./asyncActions";

const shopPageSlice = createSlice<ShopPageState, SliceCaseReducers<ShopPageState>>(
    {
        name: 'shopPage',
        initialState: {
            products: [],
            error: 'Any error'
        },
        reducers: {
            // openCloseFilterHandler() {
            //     // console.log('FILTER HAND')
            //     const types = document.getElementById('types');
            //     // @ts-ignore
            //     if (types.style.display === 'block') {
            //         // @ts-ignore
            //         types.style.display = 'none'
            //     } else {
            //         // @ts-ignore
            //         types.style.display = 'block'
            //     }
            //     // @ts-ignore
            //     types.classList.toggle(style.open);
            //     console.log(types)
            // },
            // openCloseMenuHandler(state, action) {
            //
            //     if (action.payload.target.nextElementSibling.style.display === 'block') {
            //         action.payload.target.nextElementSibling.style.display = 'none'
            //     } else {
            //         action.payload.target.nextElementSibling.style.display = 'block'
            //     }

                // action.payload.target.nextElementSibling.classList.toggle(style.open);
                // console.log('menu HAND')
            },
        //     chooseSort(state, action: any) {
        //         const choice: string = action.payload.target.textContent;
        //         // const listSort = document.getElementById('listSort');
        //         const listId = action.payload.target.parentElement;
        //         // const sortBy = event.target.parentElement.previousElementSibling;
        //         const listHead = listId.previousElementSibling;
        //         // @ts-ignore
        //         // const sortByInput: HTMLInputElement = document.getElementById('sortBy');
        //         const input: HTMLInputElement = listHead.previousElementSibling;
        //         input.value = choice;
        //
        //         // @ts-ignore
        //         listId.childNodes.forEach(item => {
        //             if (item.textContent === listHead.textContent) {
        //                 // @ts-ignore
        //                 item.classList.remove(style.chosen);
        //             }
        //         })
        //         listHead.textContent = choice;
        //         action.payload.target.classList.add(style.chosen);
        //         action.payload.target.parentElement.classList.toggle(style.open);
        //
        //     }
        // },
        extraReducers: (builder) => {
            builder.addCase(
                (getAllProductsAsyncAction.pending),
                (state) => {
                    state.products = undefined;
                    state.error = 'Загрузка';
                }
            )
                .addCase(
                    (getAllProductsAsyncAction.rejected),
                    (state, action) => {
                        state.error = action.error.message as string;
                    }
                )
                .addCase(
                    (getAllProductsAsyncAction.fulfilled),
                    (state, action) => {
                        state.products = action.payload;
                    }
                )
        }
    }
);

export default shopPageSlice.reducer;
// export const {openCloseFilterHandler, openCloseMenuHandler, chooseSort} = shopPageSlice.actions;