import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: '55',
      author: {
        _id: 1,
        name:'mahdi',
        
      },
      _id: 1,
      description: 'this is a description',
      image: 'https://as1.ftcdn.net/v2/jpg/05/73/14/38/1000_F_573143889_NVvKlj8AGINKQyT7Pr3tkvCScXShff0F.jpg',
      category: 'robots',
      title: 'we robots',
    },


  ]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ides, Vote on Pitches, and Get Noticed
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section_container">

        <p className="text-30-semibold">
          {
            query ? `Query Search ${query}` : 'All startups....'
          }

        </p>
        <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))  
          ) : (
            <p className="no-results">No startups found</p>
          )}

        </ul>
      </section>
    </>
  );
}
