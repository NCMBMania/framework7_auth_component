
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/form/:className',
    componentUrl: './pages/form.html',
  },
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
