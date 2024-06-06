export type RouteName = 'Welcome' | 'Login' | 'Register' | 'TempJob' | 'JobCreate';

interface NavbarConfig {
  [key: string]: string[];
}

export const navbarConfig: NavbarConfig = {
  Welcome: [],
  Login: [],
  Register: [],
  TempJob: ['TempJob-Angebote', 'Job erstellen'],
  JobCreate: ['TempJob-Angebote', 'Job erstellen']
};
