import { render } from '@testing-library/react';
import React from 'react'
import OffersPage from '../components/OffersPage'

describe('Offers Page tests', () => {

    it('validate the offers page UI', async () => {
        const { getByText } = render(
            <OffersPage></OffersPage>
        )
        expect(getByText('OffersPage under construction')).toBeDefined();
    })
});

