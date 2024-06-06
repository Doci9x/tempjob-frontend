export type RouteName = 'Welcome' | 'Login' | 'Register' | 'TempJob' | 'JobCreate' | 'JobDetails';

interface NavbarConfig {
  links: string[];
  showLogout: boolean;
}

export const navbarConfig: { [key in RouteName]: NavbarConfig } = {
  Welcome: { links: [], showLogout: false },
  Login: { links: [], showLogout: false },
  Register: { links: [], showLogout: false },
  TempJob: { links: ['TempJob-Angebote', 'Job erstellen'], showLogout: true },
  JobCreate: { links: ['TempJob-Angebote', 'Job erstellen'], showLogout: true },
  JobDetails: { links: ['TempJob-Angebote'], showLogout: true },
};
