export const authService = {
  isAuthenticated: localStorage.getItem('isLoggedIn') === 'true' ? true : false,
  authenticate(cb) {
    localStorage.setItem('isLoggedIn', true);
    const coockieAuthStatus = localStorage.getItem('isLoggedIn');
    authService.isAuthenticated = coockieAuthStatus === "true";
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    localStorage.removeItem('isLoggedIn');
    const coockieAuthStatus = localStorage.getItem('isLoggedIn') === "false" || false;
    authService.isAuthenticated = coockieAuthStatus;
    setTimeout(cb, 100);
  }
};

// const fakeAuth2 = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };
// export const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     localStorage.setItem('isLoggedIn', true);
//     const coockieAuthStatus = localStorage.getItem('isLoggedIn');
//     fakeAuth.isAuthenticated = coockieAuthStatus;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     localStorage.removeItem('isLoggedIn');
//     const coockieAuthStatus = localStorage.getItem('isLoggedIn') || false;
//     fakeAuth.isAuthenticated = coockieAuthStatus;
//     setTimeout(cb, 100);
//   }
// };