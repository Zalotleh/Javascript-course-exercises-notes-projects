import {styleBody, addTitle, contact} from './dom';
import users, {getPremUsers, greet} from './data';


 console.log('index file');
styleBody();
addTitle('test');
console.log(contact);

greet('ziad');
console.log(users);

const premUsers = getPremUsers(users);
console.log(premUsers);

