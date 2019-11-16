import { fireEvent, waitForElement, render } from '@testing-library/react';
import React from 'react'
import LoginPage from '../components/LoginPage'
import NavBar from '../components/NavContainer'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { toBeDisabled } from '@testing-library/jest-dom'
expect.extend({ toBeDisabled })
describe('Login page tests', () => {

    it('validate the login Page UI', async () => {
        const { getByPlaceholderText, getByText } = renderLoginPage()
        await waitForElement(() => getByText('Email'));
        expect(getByText('Email')).toBeDefined();
        expect(getByPlaceholderText('Password')).toBeDefined();
        expect(getByText('Validate')).toBeDefined();
        expect(getByText('Sign In')).toBeDefined();
    })

    it('validate the Error messages are Not displayed for valid creds', async () => {
        const { getByLabelText, queryByText } = renderLoginPage();

    })

    it('validate Sign In button is disabled for invalid creds', async () => {
       
    })

});

function renderLoginPage() {
    const history = createMemoryHistory();
    return render(<Router history={history}>
        <LoginPage></LoginPage>
    </Router>);
}

