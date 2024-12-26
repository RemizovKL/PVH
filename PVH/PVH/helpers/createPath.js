import path from 'path';

export const createPath = (page) => path.resolve('.', 'vievs', `${page}.html`);
export const createErrorPath = (page) => path.resolve('.', 'vievs', 'error', `${page}.html`);
