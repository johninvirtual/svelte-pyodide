import { writable } from 'svelte/store';
import { loadInterpreter } from './utils';

export const pyodide = writable(loadInterpreter());