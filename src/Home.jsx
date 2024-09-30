import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

function Home({ isLoading, fetchError }) {
  const searchResults = useStoreState((state) => state.searchResults);

  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No Posts to Display</p>
        ))}
    </main>
  );
}

export default Home;
