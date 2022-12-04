import {
    atom,
} from 'recoil';

export const sessionAuth = atom({
    key: 'authState',
    default:null

});

export const memberDetails = atom({
    key: 'memberDetails',
    default:[]

});