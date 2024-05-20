import Image from "next/image";
import { useRouter } from "next/router";

export const Card = ({ character }) => {
  const router = useRouter();

  const handleClick = (character) => {
    // if (router.pathname == `/character/${character.id}`)
    // 	return ;
    router.push({
      pathname: `/character/${character.id}`,
      query: {
        raw: JSON.stringify(character),
        id: character.id,
      },
    });
  };

  return (
    <div
      onClick={() => handleClick(character)}
      className="border font-mono bg-neutral-300 border-gray-300 p-5 rounded-lg m-2 shadow-lg flex flex-col items-center"
    >
      <div className="relative w-24 h-24 rounded-full overflow-hidden">
        <Image
          src={character.image}
          alt={character.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-lg font-bold mt-2">{character.name}</h3>
      <p className="text-sm text-gray-600">
        {character.species} -{" "}
        <span
          className={`font-bold animate-pulse ${
            character.status == "Alive"
              ? "text-emerald-700"
              : character.status == "Dead"
              ? "text-red-700"
              : "text-gray-700"
          }`}
        >
          {character.status}
        </span>{" "}
      </p>
      <p className="text-sm text-gray-600">
        {character.origin.name} - {character.location.name}{" "}
      </p>
    </div>
  );
};
