// wildcard x display card dinamica. basta fare /cHaracter/1 e si vedrà la card del personaggio 1
import { gql, useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";
import { Card } from "@/components/card/card";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
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
`;

const Characterpage = () => {
  const router = useRouter();
  const [character, setCharacter] = useState(null);

  const [getCharacter, { loading, data }] = useLazyQuery(GET_CHARACTER, {
    variables: { id: router.query.id },
  });

  useEffect(() => {
    if (router.query.raw) {
      setCharacter(JSON.parse(router.query.raw));
    } else if (router.query.id) {
      getCharacter();
    }
  }, [router.query]);

  useEffect(() => {
    if (data && data.character) {
      setCharacter(data.character);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (!character) return <div>No character found</div>;

  return (
    <>
      <div className="border border-gray-300 p-5 rounded-lg m-2 shadow-lg flex flex-col items-center">
		<div className="container">
        	<Card character={character}></Card>
		</div>
      </div>
    </>
  );
};

export default Characterpage;
