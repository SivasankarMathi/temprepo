/**
 * Credential checks for the sign-in page.
 *
 * The functions here are pure so the same code runs in the browser and
 * under `node --test`. They stand in for a server: a real product must
 * verify credentials on the server and never ship them to the browser.
 */

/** The single demo account. Replace it with a server call in production. */
export const DEMO_CREDENTIALS = {
    username: 'admin',
    password: 'password'
};

/**
 * Check the shape of the submitted values.
 *
 * Returns a map of field name to message. An empty map means the values
 * are worth sending to the server.
 */
export function validateCredentials({ username = '', password = '' } = {}) {
    const errors = {};
    const name = typeof username === 'string' ? username.trim() : '';

    if (!name) {
        errors.username = 'Enter your username.';
    } else if (name.length < 3) {
        errors.username = 'Username must be at least 3 characters.';
    }

    if (!password) {
        errors.password = 'Enter your password.';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters.';
    }

    return errors;
}

/**
 * Verify credentials against the known accounts.
 *
 * Returns one of:
 *   { ok: true, user: { username } }
 *   { ok: false, reason: 'invalid-input', errors: { field: message } }
 *   { ok: false, reason: 'invalid-credentials', errors: {} }
 */
export function authenticate(credentials = {}, accounts = [DEMO_CREDENTIALS]) {
    const errors = validateCredentials(credentials);

    if (Object.keys(errors).length > 0) {
        return { ok: false, reason: 'invalid-input', errors };
    }

    const name = String(credentials.username).trim().toLowerCase();

    const match = accounts.find(
        (account) =>
            account.username.toLowerCase() === name && account.password === credentials.password
    );

    if (!match) {
        return { ok: false, reason: 'invalid-credentials', errors: {} };
    }

    return { ok: true, user: { username: match.username } };
}
