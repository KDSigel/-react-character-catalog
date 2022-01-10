import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Characters from "./Characters";


it('should render the Character', () => {

const characters = [{
    image: 'someurl',
    name: 'fred',
    species: 'ape',
    status: 'dead',
}]

    const { container } = render(
      <MemoryRouter>
        <Characters characters={characters}/>
      </MemoryRouter>
    );
  
    expect(container).toMatchSnapshot();
  });