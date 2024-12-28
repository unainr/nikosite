import MoviesCard from "@/components/MoviesCard";
import { client } from "@/sanity/lib/client";
import { MOVIES_FETCH_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
	const movies = await client.fetch(MOVIES_FETCH_QUERY) ;
	return (
		<>
			<div className="mt-12 grid mx-4 gap-2 sm:grid-cols-2 lg:grid-cols-3 mb-5">
				{movies?.length > 0 ? (
					movies
						// .slice(0, 6)
						.map((movie: any) => <MoviesCard key={movie._id} movie={movie} />)
				) : (
					<p className="no-results">No Post found</p>
				)}
			</div>
		</>
	);
}
export const revalidate = 60; // Revalidate the page every 60 seconds

