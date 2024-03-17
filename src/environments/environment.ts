// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // API URLs
  baseUrl: 'https://task-master-angular-backend.onrender.com/api/',
  signup: 'https://task-master-angular-backend.onrender.com/api/user/signup',
  login: 'https://task-master-angular-backend.onrender.com/api/user/login',
  getTodo: 'https://task-master-angular-backend.onrender.com/api/todo/get',
  removeToDO: 'https://task-master-angular-backend.onrender.com/api/todo/remove',
  addToDo: 'https://task-master-angular-backend.onrender.com/api/todo/add',
  updateToDo: 'https://task-master-angular-backend.onrender.com/api/todo/update'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
