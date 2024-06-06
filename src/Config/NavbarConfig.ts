export type RouteName = 'Welcome' | 'Login' | 'Register' | 'Tempjob' | 'JobCreate';

export const navbarConfig: Record<RouteName, { path: string; label: string }[]> = {
  Welcome: [],
  Login: [],
  Register: [],
  Tempjob: [
    { path: '/tempjob', label: 'TempJob-Angebote' },
    { path: '/job-create', label: 'Job erstellen' },
  ],
  JobCreate: [
    { path: '/tempjob', label: 'TempJob-Angebote' },
    { path: '/job-create', label: 'Job erstellen' },
  ],
};
