import { Main, About } from 'pages';

const routes = [
  {
    path: ['/'],
    page: Main,
    exact: true,
  },
  {
    path: '/about',
    page: About,
    exact: true,
  },
];

export default routes;
