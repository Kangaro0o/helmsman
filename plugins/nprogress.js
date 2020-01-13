import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// NProgress配置
NProgress.inc(0, 2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
  });

  app.router.afterEach(() => {
    NProgress.done()
  });
}