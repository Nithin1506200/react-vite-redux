import { dummySvg } from '@/assets/generic';
import { changeName } from '@/store/dummy/dummy1/dummy1.slice';
import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { useAppSelector } from '@/hooks/store/useAppSelector';
export default function Dummy() {
  // console.log(import.meta.env.VITE_ENABLE_DEV_TOOLS);
  const x = useAppSelector((state) => state.dummyReducer.dummy1);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>{import.meta.env.VITE_ENABLE_DEV_TOOLS}</h1>
      <h1>{x.value}</h1>
      <button
        onClick={() => {
          dispatch(changeName('name changed'));
        }}>
        change namd
      </button>
      <img src={dummySvg} alt="dummy" />
    </>
  );
}
