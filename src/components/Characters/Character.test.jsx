import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Character from "./Character";


it('should render the Character', () => {

const character = {
    image: 'someurl',
    name: 'fred',
    species: 'ape',
    status: 'dead',
}

    const { container } = render(
      <MemoryRouter>
        <Character character={character}/>
      </MemoryRouter>
    );
  
    expect(container).toMatchSnapshot();
  });