declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@/api' {
  const apiClient: {
    getJobs(): Promise<any>;
    getJob(id: string | number): Promise<any>;
    createJob(job: any): Promise<any>;
    deleteJob(id: string | number): Promise<any>;
    patchJob(id: string | number, job: any): Promise<any>;

    getUsers(): Promise<any>;
    getUser(id: string | number): Promise<any>;
    createUser(user: any): Promise<any>;
    updateUser(id: string | number, user: any): Promise<any>;
    patchUser(id: string | number, user: any): Promise<any>;
    deleteUser(id: string | number): Promise<any>;
    loginUser(user: any): Promise<any>;

    getNotificationsByUserId(userId: string | number): Promise<any>;
    getUnreadNotificationsByUserId(userId: string | number): Promise<any>;
    createNotification(notification: any): Promise<any>;
    markNotificationAsRead(notificationId: string | number): Promise<any>;
    deleteAllNotifications(): Promise<any>;
    getAllNotifications(): Promise<any>;
  };
  export default apiClient;
}
