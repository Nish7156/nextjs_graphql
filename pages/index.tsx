
import type { NextPage } from 'next'
import { HomeService } from '../Graphql'


const Home: NextPage = (
  { allData }: any
) => {
  // const {data, error, loading} = useQuery(  )

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1>Hiiii</h1>
      {allData.map((ele: any) => {
        return <>
          <li>{ele.id}</li>
          <li>{ele.attributes.product_name}</li>
          <li>{ele.attributes.desc}</li>
        </>
      })}
    </div>
  )
}

export default Home

export async function  getServerSideProps() {


  // const { data } = await client.query({
  //   query: gql`
  //   query{
  //     products{
  //       data{
  //         attributes{
  //           desc
  //           product_name
  //         }
  //       }
  //     }
  //   }
  //   `
  // })
  const {data}= await HomeService();

  console.log(data,"====-");
  


  return {
    props: {
      allData: data.products.data

    }
  }
}


