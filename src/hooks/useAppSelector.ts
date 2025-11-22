import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../app/store";


// With typed hooks: TypeScript knows state.game exists!
// Without typed hooks (using react-redux directly): No type safety!
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default useAppSelector