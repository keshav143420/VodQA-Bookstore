import { fireEvent, waitForElement, render, getAllByText } from '@testing-library/react';
import React from 'react'
import ShoppingPage from '../components/VQStore'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Shopping Page tests', () => {

    it('validate the Filtering - Filter by Rujuta Divekar and validate single book is displayed', async () => {

    })
});


function renderShoppingPage() {
    const history = createMemoryHistory();

    return render(
        <Router history={history}> 
            <ShoppingPage></ShoppingPage>
        </Router>)
}
