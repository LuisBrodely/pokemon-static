import { GetStaticProps, NextPage } from "next"
import { Layout } from "../components/layouts"
import { pokeApi } from "@/api"
import { PokemonListResponse } from "@/interfaces"

const Home: NextPage = (props) => {

  console.log(props)

  return (
    <Layout title='Pokemon App'>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hola Mundo</h1>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  
  return {
    props: {
      pokemons: data.results
    }
  }

}

export default Home
