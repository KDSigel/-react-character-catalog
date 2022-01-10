import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import App from '../../App'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

const server = setupServer(
rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
return res(
    ctx.json({
        image: 'https://commons.wikimedia.org/wiki/File:Rasputin_PA.jpg',
        name: 'Greg',
        species: 'Hu-mon',
        status: 'awake',
    })
)
}))

describe('characterdetail', () => {

    beforeAll(() => {
        server.listen()
    })

    afterAll(() => {
        server.close()
    })

it('testing character detail', async () => {
render(
    <MemoryRouter initialEntries={['/characters/1']}>
        <App />
    </MemoryRouter>
)
screen.getByText('Loading character...')
await screen.findByText('Greg')
})
})