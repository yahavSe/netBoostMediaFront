export class Environment {
  mock = false;
  production = false;
  webUrl = 'http://localhost:4200';
  apiUrl = 'http://localhost:8000/api';
}

export const environment = new Environment();
