import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card } from "../card/card";

const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int!) {
    characters(page: $page) {
      info {
        next
        prev
        pages
        count
      }
      results {
        id
        name
        status
        species
        image
        gender
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;

export const Homepage = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (data && data.characters) {
      setCharacters((prev) => [...prev, ...data.characters.results]);
    }
  }, [data]);
  if (loading && page == 1) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-gray-500">Error </p>;

  const loadMore = () => {
    if (data && data.characters.info.next) {
      setPage(data.characters.info.next);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-wrap justify-center">
        {characters.map((character) => (
          <Card character={character} key={character.id}></Card>
        ))}
      </div>
      {data && data.characters.info.next && (
        <button
          onClick={loadMore}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Load More
        </button>
      )}
    </div>
  );
};
