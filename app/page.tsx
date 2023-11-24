import {GetPostsEdgesDocument} from "@/generates/gql/graphql";
import {client} from "@/lib/requestClient";


const getPost= async () => {
  const {posts} =   await client.request(GetPostsEdgesDocument)
  return posts?.edges
}

const Home = async () => {
  const edges = await getPost()

  return (
    <div>
      {edges?.map(edge => <div key={edge?.node.id}>
        {edge?.node?.title}
      </div>)}
    </div>
  )
}
export default Home