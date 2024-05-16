import { useQuery, gql } from '@apollo/client';
import Image from 'next/image';

const GET_ALL_CHARACTERS = gql`
    query GetAllCharacters {
        characters {
            results {
                id
                name
                status
                species
                image
            }
        }
    }
`;


export const Card = () => {
    const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);
    if (loading) return <p className='text-gray-500'>Loading...</p>;
    if (error) return <p className='text-gray-500'>Error </p>;
    return (
        <div className='flex flex-wrap justify-center'>
            {data.characters.results.map(character => (
                <div key={character.id} className='border border-gray-300 p-5 rounded-lg m-2 shadow-lg flex flex-col items-center '>
                    <div className='relative w-24 h-24 rounded-full overflow-hidden'>
                        <Image
                            src={character.image}
                            alt={character.name}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <h3 className='text-lg font-bold mt-2'>{character.name}</h3>
                    <p className='text-sm text-gray-600'>{character.species} - {character.status}</p>
                </div>
            ))}
        </div>
    );
}
