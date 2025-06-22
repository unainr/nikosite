import { About } from "@/components/About";
import { AnimatedTestimonialsDemo } from "@/components/ClientsReview";
import ContactForm from "@/components/ContactUs";
import { DemoHeroGeometric } from "@/components/DemoHeroGeometric";
import Experience from "@/components/Experience";
import MoviesCard from "@/components/MoviesCard";
import { SpotlightPreview } from "@/components/SpotLight";
import { CarouselTech } from "@/components/techslider/carouseltech";
import { client } from "@/sanity/lib/client";
import { PORTFOLIO_FETCH_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
	const projects = await client.fetch(PORTFOLIO_FETCH_QUERY);
	return (
		<>
			{/* <SpotlightPreview /> */}
			<DemoHeroGeometric />
			{/* <TechStackSlider /> */}
			<CarouselTech />
			<About />
			<Experience />

			<section className="max-w-7xl mx-auto my-16">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
							Our Featured Projects
						</span>
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Discover our portfolio of innovative solutions and successful
						digital transformations
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 p-6 ">
					{projects?.length > 0 ? (
						projects
							.slice(0, 6)
							.map((portfolio: any) => (
								<MoviesCard key={portfolio._id} portfolio={portfolio} />
							))
					) : (
						<p className="no-results">No Post found</p>
					)}
				</div>
			</section>

			<AnimatedTestimonialsDemo />
			<ContactForm />
		</>
	);
}
export const revalidate = 60;
