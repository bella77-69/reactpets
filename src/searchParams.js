import { useState, useEffect } from 'react';
import useBreedList from './useBreedList';
import Results from './Results';



const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
const [location, setLocation] = useState("");
const [animal, setAnimal] = useState("");
const [breed, setBreed] = useState("");
const [pets, setPets] = useState([]);
const [breeds] = useBreedList(animal);

useEffect(() => {
  requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // [] Limits the render to only once/call the effect once 

async function requestPets() {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  const json = await res.json();

  setPets(json.pets);
}


    return (
        <div className="search-params">
          <form
            onSubmit = {(e) => {
              e.preventDefault();
              requestPets();
            }}
          >
            
            {/* Location */}
              <label htmlFor="location">
                  Location
                  <input 
                  id="location" 
                //   Shorthand function 
                  onChange={(e)  => setLocation(e.target.value)}
                  value={location} 
                  placeholder="Location"/>
              </label>
              
              {/* Animal */}
              <label htmlFor="animal">
                Animal
                <select 
                id="animal" 
                value={animal} 
                onChange={e => setAnimal(e.target.value)}
                onBlur={e => setAnimal(e.target.value)}
                >
                  <option value=""></option>
                  {
                    ANIMALS.map(animal => (
                      <option value={animal} key={animal}>
                        {animal}
                      </option>

                    ))
                  }
                </select>

                {/* Breeds  */}
                </label>
                <label htmlFor="breed">
                Breed
                <select 
                id="breed" 
                value={breed} 
                onChange={e => setBreed(e.target.value)}
                onBlur={e => setBreed(e.target.value)}
                >
                  <option value=""></option>
                  {
                    breeds.map(breed => (
                      <option value={breed} key={breed}>
                        {breed}
                      </option>

                    ))
                  }
                </select>
                </label>

              <button>Submit</button>
          </form>
          <Results pets={pets} />
        </div>
    )
}

export default SearchParams; 