import md5 from 'md5';
import moment from 'moment';

export const TIMESTAMP = moment().unix();
export const PUBLIC_KEY = '38395d4b73293f279a560d148ef716e4';
export const PRIVATE_KEY = '9da5743057c0a3cd392632a9341f393f955216b5';
export const HASH = md5(TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY);
