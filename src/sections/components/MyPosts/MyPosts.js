import { MyPostCard } from './myPostCard/myPostCard'
import * as useData from '../../../Services/useData'


export const MyPosts = ({ myPost , myPostHandler, auth }) => {
    console.log(myPost);
    useData.getMyPosts(auth._id)
    .then(x => console.log(x))
    
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