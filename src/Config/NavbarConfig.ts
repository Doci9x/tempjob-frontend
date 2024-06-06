export type RouteName = 'Welcome' | 'Login' | 'Register' | 'TempJob' | 'JobCreate' | 'JobDetails';

interface NavbarConfig {
  links: string[];
  showProfileIcon: boolean;
}

export const navbarConfig: { [key in RouteName]: NavbarConfig } = {
  Welcome: { links: [], showProfileIcon: false },
  Login: { links: [], showProfileIcon: false },
  Register: { links: [], showProfileIcon: false },
  TempJob: { links: ['TempJob-Angebote', 'Job erstellen'], showProfileIcon: true },
  JobCreate: { links: ['TempJob-Angebote', 'Job erstellen'], showProfileIcon: true },
  JobDetails: { links: ['TempJob-Angebote'], showProfileIcon: true },
};
