import {createAsyncThunk} from "@reduxjs/toolkit";
import {TGetProductRequest, TGetProductResponse} from "./types";

export const updateQuantity = createAsyncThunk<TGetProductRequest, TGetProductResponse>