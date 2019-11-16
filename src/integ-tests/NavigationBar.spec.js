import { LocalStorageMock } from '@react-mock/localstorage';
import { fireEvent, waitForElement, render } from '@testing-library/react';
import React from 'react'
import NavigationBar from '../components/NavContainer'

describe('Shopping Page tests', () => {
    it('validate the Shopping Page UI', async () => {

    })
});


function renderNavigationBar() {
    return render(
        <NavigationBar></NavigationBar>
    )
}
