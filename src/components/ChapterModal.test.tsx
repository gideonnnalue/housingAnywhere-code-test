import { render, screen, cleanup } from "@testing-library/react";
import ChapterModal from "./ChapterModal";

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

beforeEach(() => {
  render(<ChapterModal episodes={episodes} closeModal={() => {}} />);
});

afterEach(cleanup);

describe("Chapter Modal Test", () => {
  test("Should take snapshot of modal", () => {
    const { asFragment } = render(
      <ChapterModal episodes={episodes} closeModal={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should have two elements", () => {
    const modalBody = screen.getByTestId("modal-body");
    const chapterList = screen.getByTestId("chapter-list");
    const chapterItems = screen.getAllByTestId("chapter-item");

    expect(modalBody).toContainElement(chapterList);
    expect(chapterItems).toHaveLength(2);
    expect(chapterItems[0]).toHaveTextContent("S01E06");
    expect(chapterItems[0]).toContainHTML("<span>Rick Potion #9</span>");
  });
});
