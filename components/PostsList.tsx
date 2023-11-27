import {GetPostsEdgesDocument} from "@/generates/gql/graphql";
import {client} from "@/lib/requestClient";
import CardItem from "@/components/CardItem";

const getPost = async () => {
    const {posts} = await client.request(GetPostsEdgesDocument)
    return posts?.edges
}

const PostsList = async () => {
    const edges = await getPost()

    return (
        <div className="grid grid-cols-2 gap-4">
            {edges?.map(edge => (
                <div key={edge?.node.id}>
                    <CardItem edge={edge}/>
                </div>))}

        </div>
    )
}
export default PostsList