import { CookieStorage } from 'cookie-storage';

const cookieStorage = new CookieStorage();
console.log(cookieStorage);

cookieStorage.length === 0;
cookieStorage.getItem('key') === null;
console.log(cookieStorage.getItem('key'));

cookieStorage.setItem('key', 'value');
cookieStorage.length === 1;
cookieStorage.key(0) === 'key';
console.log(cookieStorage.key(0));

cookieStorage.getItem('key') === 'value';
cookieStorage.removeItem('key');
cookieStorage.length === 0;
console.log(cookieStorage.length);

cookieStorage.setItem('k1', 'v1');
cookieStorage.setItem('k2', 'v2');
cookieStorage.length === 2;
console.log(cookieStorage.length);

cookieStorage.clear();
cookieStorage.length === 0;
console.log(cookieStorage.length);