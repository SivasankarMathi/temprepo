import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { authenticate, validateCredentials, DEMO_CREDENTIALS } from '../src/auth.js';

describe('validateCredentials', () => {
    it('accepts the demo credentials', () => {
        assert.deepEqual(validateCredentials(DEMO_CREDENTIALS), {});
    });

    it('reports a missing username', () => {
        assert.equal(validateCredentials({ username: '', password: 'password' }).username,
            'Enter your username.');
    });

    it('reports a missing password', () => {
        assert.equal(validateCredentials({ username: 'admin', password: '' }).password,
            'Enter your password.');
    });

    it('rejects a username shorter than three characters', () => {
        assert.match(validateCredentials({ username: 'ab', password: 'password' }).username,
            /at least 3 characters/);
    });

    it('rejects a password shorter than six characters', () => {
        assert.match(validateCredentials({ username: 'admin', password: 'short' }).password,
            /at least 6 characters/);
    });

    it('treats a missing argument as empty input', () => {
        assert.ok(validateCredentials().username);
        assert.ok(validateCredentials().password);
    });

    it('ignores surrounding whitespace in the username', () => {
        assert.deepEqual(validateCredentials({ username: '  admin  ', password: 'password' }), {});
    });
});

describe('authenticate', () => {
    it('signs in with the demo credentials', () => {
        const result = authenticate(DEMO_CREDENTIALS);

        assert.equal(result.ok, true);
        assert.deepEqual(result.user, { username: 'admin' });
    });

    it('does not leak the password back to the caller', () => {
        const result = authenticate(DEMO_CREDENTIALS);

        assert.equal('password' in result.user, false);
    });

    it('matches the username regardless of case', () => {
        const result = authenticate({ username: 'ADMIN', password: 'password' });

        assert.equal(result.ok, true);
        assert.deepEqual(result.user, { username: 'admin' });
    });

    it('rejects a wrong password', () => {
        const result = authenticate({ username: 'admin', password: 'wrong-password' });

        assert.equal(result.ok, false);
        assert.equal(result.reason, 'invalid-credentials');
    });

    it('rejects an unknown user', () => {
        const result = authenticate({ username: 'someone', password: 'password' });

        assert.equal(result.ok, false);
        assert.equal(result.reason, 'invalid-credentials');
    });

    it('reports invalid input before checking the password', () => {
        const result = authenticate({ username: '', password: '' });

        assert.equal(result.ok, false);
        assert.equal(result.reason, 'invalid-input');
        assert.ok(result.errors.username);
        assert.ok(result.errors.password);
    });

    it('accepts a custom account list', () => {
        const accounts = [{ username: 'sam', password: 'hunter22' }];
        const result = authenticate({ username: 'sam', password: 'hunter22' }, accounts);

        assert.equal(result.ok, true);
        assert.deepEqual(result.user, { username: 'sam' });
    });

    it('does not sign in the demo account when a custom list is given', () => {
        const accounts = [{ username: 'sam', password: 'hunter22' }];
        const result = authenticate(DEMO_CREDENTIALS, accounts);

        assert.equal(result.ok, false);
    });
});
