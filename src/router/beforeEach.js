import store from "../store";

const isAuthRoute = (route) => route.path.indexOf("/login") !== -1;

const isLogged = () => store.getters.isLoggedIn;

export default (to, from, next) => {
  if (!isAuthRoute(to) && !isLogged()) {
    next("/login");
  } else {
    next;
  }
};
