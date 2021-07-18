import { useState, useEffect, useCallback } from "react";
import { RickMortyResponse, EpisodeResponse } from "../components/types";
import axios from "axios";

const useFetchCharacters = () => {
  const [characters, setCharacters] = useState<Array<RickMortyResponse>>([]);
  const [errors, setErrors] = useState(null);

  const fetchCharacters = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      if (data) {
        const { results } = data;
        const formattedResults: RickMortyResponse[] = await Promise.all(
          results.map(async (result: RickMortyResponse) => {
            const {
              location: { url: locationUrl },
              origin: { url: originUrl },
              episode,
            } = result;

            // Location information
            const urls = [originUrl, locationUrl];
            const promises = urls.map((url: string) => axios.get(url));
            const requestedData: any = await Promise.all(promises);

            // Episodes information
            const episodesPromises = episode.map((url: string) =>
              axios.get(url)
            );
            const episodeData: EpisodeResponse[] = await Promise.all(
              episodesPromises
            );

            if (requestedData) {
              const finalData = {
                ...result,
                origin: originUrl ? requestedData[0].data : result.origin,
                location: locationUrl ? requestedData[1].data : result.location,
                episode: episodeData,
              };
              return finalData;
            }
            return result;
          })
        );
        setCharacters(formattedResults);
      }
    } catch (err) {
      console.log(err);
      setErrors(err);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return { characters, errors };
};

export default useFetchCharacters;
