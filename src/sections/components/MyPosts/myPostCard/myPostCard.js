export const MyPostCard = ({post}) => {
    return (
        <section>
            <div>
                <h1>Post</h1>
                <ul>
                    <li>{post.serviceOne}</li>
                    <li>{post.serviceTwo}</li>
                    <li>{post.description}</li>
                </ul>
                <img src={post.img} alt="Post" />
            </div>
        </section>
    )
}