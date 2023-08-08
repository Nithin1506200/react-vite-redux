import routePath from '@/router/routes.path';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate('../' + routePath.dashboard.base, { replace: true });
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="username"> username</label>
        <input type="text" name="username"></input>
        <label htmlFor="password">passowrd</label>
        <input type="password" name="passowrd"></input>
        <button type="submit"></button>
      </form>
    </>
  );
}
