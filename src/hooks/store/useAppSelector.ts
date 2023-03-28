import { RootState } from '@/store/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
/**
 * useAppSelector is similar to use selector but the state is already typed
 * @example
 * const state= useSelector((state:RootState)=>state);
 * const state = useAppSelector(state=>state)
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
