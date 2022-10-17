import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import apiInfo from "../utils/request";
import genresData from "../utils/genres";
import Row from "../components/Row";

//TYPES
import { Games } from "../typings";
import { Genre } from "../typings";

interface Props {
  allGames: Games[];
  allGenres: Genre[];
}

const Home = ({ allGames, allGenres }: Props) => {
  console.log(allGenres);

  return (
    <div className="relative h-screen lg:h-[140vh] 	 ">
      <Head>
        <title>Videogames Remaster</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        {/* Banner */}
        <Banner allGames={allGames} />
        <section className="md:space-y-24">
          {/* Row */}
          {/*
          haria algo como mapear por genero y mostrar una row por cada
          { genresData.map((e) <Row title={e.name} games={filteredByGenre} />
          )}
          */}
          <Row title="Action Games" allGames={allGames} />
          <Row title="Action Games" allGames={allGames} />
          <Row title="Action Games" allGames={allGames} />
          <Row title="Action Games" allGames={allGames} />
          <Row title="Action Games" allGames={allGames} />
          <Row title="Action Games" allGames={allGames} />
          {/* Row */}
        </section>
      </main>
      {/* model */}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const allGames = await apiInfo();
  const allGenres = await genresData();

  return {
    props: { allGames, allGenres },
  };
};
