export const getPasswordStrength = (password: string): number => {
    const weak = /[0-9a-zA-_Z!@#$%^&.*]{5,}/;
    const moderate = /[0-9a-zA-_Z!@#$%^&.*]{8,}/;
    const strong = /(?=.*\D)[0-9a-zA-_Z!@#$%^&.*]{8,}$/;
    const veryStrong =
        /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[0-9a-zA-_Z!@#$%^&.*]{8,}$/;
    const superStrong =
        /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!_@#$%^&*.])[0-9a-zA-_Z!@#$%^&.*]{8,}$/;

    if (superStrong.test(password)) return 6;
    if (veryStrong.test(password)) return 5;
    if (strong.test(password)) return 4;
    if (moderate.test(password)) return 3;
    if (weak.test(password)) return 2;
    return 1;
};