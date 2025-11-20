import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";

export default function useAppDispatch() {
    return useDispatch<AppDispatch>()
}