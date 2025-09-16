import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import { auth } from '../firebase.client';
import { onAuthStateChanged } from 'firebase/auth';

export const user = writable<User | null>(null);

onAuthStateChanged(auth, (newUser) => {
  user.set(newUser);
});
