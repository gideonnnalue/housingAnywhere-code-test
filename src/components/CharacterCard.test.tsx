import { render, cleanup } from "@testing-library/react";

import CharacterCard from "./CharacterCard";
const episodes = [
  {
    air_date: "January 27, 2014",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    created: "2017-11-10T12:56:34.339Z",
    episode: "S01E06",
    id: 6,
    name: "Rick Potion #9",
    url: "https://rickandmortyapi.com/api/episode/6",
  },
  {
    air_date: "January 27, 2014",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    created: "2017-11-10T12:56:34.339Z",
    episode: "S01E06",
    id: 7,
    name: "Rick Potion #9",
    url: "https://rickandmortyapi.com/api/episode/6",
  },
];

const localData = {
  name: "Earth (Replacement Dimension)",
  dimension: "Earth (Replacement Dimension)",
  residents: ["1", "2", "3"],
  url: "https://rickandmortyapi.com/api/episode/6",
  created: null,
  id: null,
  type: null,
};
const data = {
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  origin: localData,
  location: localData,
  name: "Rick Sanchez",
  episode: episodes,
  species: "Human",
  status: "Alive",
  gender: "Male",
};

afterEach(cleanup);

describe("Character card test", () => {
  test("Should take snapshot of card", () => {
    const { asFragment } = render(
      <CharacterCard
        image={data.image}
        origin={data.origin}
        location={data.location}
        name={data.name}
        episode={data.episode}
        species={data.species}
        status={data.status}
        gender={data.status}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
