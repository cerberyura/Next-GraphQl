import {client} from "@/lib/requestClient";
import {GetPostDocument} from "@/generates/gql/graphql";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";

const getPost = async (id: string) => {
    const {post} = await client.request(GetPostDocument, {id})
    return post
}
const Page = async ({params: {id}}: { params: { id: string } }) => {
    const post = await getPost(id)
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>
                        {post?.title}
                    </CardTitle>
                    <CardDescription> By {post?.author?.node.name} від {post?.date ? new Date(post.date).toLocaleDateString('ua-Ua') : 'Not Data'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative h-96">
                    {post?.featuredImage?.node.sourceUrl && (
                      <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || "Image description"}
                      fill
                      style={{objectFit:'cover'}}
                    />
                    )}
                    </div>
                    <div dangerouslySetInnerHTML={{__html: post?.content ? post?.content : ''}} className='mt-6'></div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Page