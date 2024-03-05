import Image from "next/image";
import Link from "next/link";
import { API_URL } from "../api/harry-potter";

async function getCharacter() {
  const response = await fetch(`${API_URL}/characters`);
  const json = await response.json();
  return json;
}

export default async function CharacterCard() {
  const characters = await getCharacter();

  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
        {characters?.slice(0, 20).map((p: any) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={p.id}
          >
            <Link href={`/characters/${p.id}`}>
              <Image
                className="rounded-t-lg"
                src={p.image}
                alt={p.image}
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                sizes="100vw"
              />
            </Link>
            <div className="p-5">
              <Link href={"/"}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {p.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{p.dateOfBirth}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{p.house}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{p.home}</p>
              <Link
                href={`/characters/${p.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-900 rounded-lg hover:bg-yellow-800 "
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
