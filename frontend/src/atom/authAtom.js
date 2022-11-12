import {
    atom,
} from 'recoil';

export const sessionAuth = atom({
    key: 'authState',
    default:''

});

export const memberDetails = atom({
    key: 'memberDetails',
    default:[]

});