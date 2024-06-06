
import { Dashboard } from './pages/public/dashboard/dashboard.page';
import { LoginPage } from './pages/public/login';
import { RegisterPage } from './pages/public/register';
import { CreateFlights } from './pages/private/createflights/createflights.page';
import { NotFoundPage } from './pages/public/not-found';
// import { HomeScene } from './scenes/home';
// import { LoginScene } from './scenes/login/login.scene';
// import { NotFoundScene } from './scenes/not-found';



export const routes = {
  public: [{ path: '/register', page: RegisterPage},
  { path: '/not-found', page: NotFoundPage  },
  { path: '/login', page: LoginPage },
  
  { path: '/', page: RegisterPage}

  ],
  private: [{path:'/dashboard/flights/create', page:CreateFlights},
  { path: '/dashboard/admin', page: Dashboard},
  ],
};