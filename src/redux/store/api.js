// const PREFIX = '/api';

export const getProduct = () => {
    return fetch('/products').then(res => res.json());
}