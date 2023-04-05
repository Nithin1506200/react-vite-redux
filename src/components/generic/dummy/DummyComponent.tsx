import { dummySvg } from '@/assets/generic';
import { changeName } from '@/store/dummy/dummy1/dummy1.slice';
import { changeNameOfSlice2 } from '@/store/dummy/dummy2/dummy2.slice';
import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { useAppSelector } from '@/hooks/store/useAppSelector';

export default function Dummy() {
  // console.log(import.meta.env.VITE_ENABLE_DEV_TOOLS);
  const x = useAppSelector((state) => state.dummyReducer.dummy1);
  const dummy2 = useAppSelector((state) => state.dummyReducer.dummy2);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>{import.meta.env.VITE_ENABLE_DEV_TOOLS}</h1>
      <h1>{x.value}</h1>
      <h1>{dummy2.value}</h1>
      <button
        onClick={() => {
          dispatch(changeName('name changed'));
          dispatch(changeNameOfSlice2('nithin'));
        }}>
        change namd
      </button>
      <img src={dummySvg} alt="dummy" />
    </>
  );
}
