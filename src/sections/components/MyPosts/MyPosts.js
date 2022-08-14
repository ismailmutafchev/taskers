import { MyPostCard } from './myPostCard/myPostCard'


export const MyPosts = ({ myPost }) => {
    if (myPost.length > 0) {
        return (
            myPost.map(x => <MyPostCard key={x._id} post={x} />)
        )
    } else {
        return (
        <div>
            <h2>404</h2>
            <h2>404</h2>
            <h2>404</h2>
            <h2>404</h2>
            <h2>404</h2>
            <h2>404</h2>
            <h2>404</h2>
            <h2>404</h2>
            <h2>404</h2>
            <h2>404</h2>
        </div>
        )
    }

}