// import { LocalStorageMock } from '@react-mock/localstorage';
import { fireEvent, waitForElement, render, getAllByText } from '@testing-library/react';
import React from 'react'
import ShoppingPage from '../components/VQStore'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Shopping Page tests', () => {
    it('validate the Filtering by Mock response', async () => {

    })
});


function renderShoppingPage() {
    const history = createMemoryHistory();

    return render(
        <Router history={history}> 
            <ShoppingPage></ShoppingPage>
        </Router>)
}
