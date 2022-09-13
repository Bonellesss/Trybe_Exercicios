"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = __importDefault(require("./classes/email"));
const mailList_1 = __importDefault(require("./classes/mailList"));
// Para testar
const friendEmail = 'friend@personalmail.com';
const myEmail = 'me@personalmail.com';
const email1 = new email_1.default(myEmail, friendEmail, 'Car wash', 'There\'s a new car wash in town. Did you know?');
const email2 = new email_1.default(friendEmail, myEmail, 'Reply - Car wash', 'Great! My car is really dirty. How much do they charge?');
const email3 = new email_1.default(myEmail, friendEmail, 'Reply - Reply - Car wash', '$5.00, and you get a free polishing cloth');
const email4 = new email_1.default('me@companymail.com', 'ceo@companymail.com', 'Day off monday', `Next Tuesday is a holiday.
  Are we going to work on Monday?`);
const email5 = new email_1.default('ceo@companymail.com', 'me@companymail.com', 'Reply - Day off monday', 'The entire company will have a day off on monday =D');
const personalMailList = new mailList_1.default([email1, email2, email3]);
const professionalMailList = new mailList_1.default([email4, email5]);
console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
personalMailList.getEmailsSentBy(myEmail).forEach((mail) => console.log(mail.content));
const email6 = new email_1.default(myEmail, 'friend2@personalmail.com', 'Day off monday', `Oh yes!
   My boss says we'll have Monday off.
   Want to go to the movies?`);
personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente
console.log('------ personalMailList.getBySubject(\'Day off\'):');
personalMailList.getEmailsBySubject('Day off').forEach((mail) => console.log(mail.content));
personalMailList.removeEmail(email5);
console.log('------ professionalMailList.all:');
professionalMailList.all.forEach((mail) => console.log(mail.content));
console.log('------ personalMailList.all:');
personalMailList.all.forEach((mail) => console.log(mail.content));
