import { atom } from 'recoil';

export const bodyState = atom({
	key: 'bodyAtom',
	default: '',
});

export const passwordState = atom({
	key: 'passwordAtom',
	default: '',
});

export const expiresInState = atom({
	key: 'expiresInAtom',
	default: '5 minutes',
});

export const validPasswordState = atom({
	key: 'validPasswordAtom',
	default: '',
});
