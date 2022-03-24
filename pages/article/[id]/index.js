import {useRouter} from 'next/router';
import Link from 'next/link';
const Article = ({newInstance}) => {
    const router = useRouter();
    console.log(router.query)
    const {id} = router.query
  return (
    <div>
      <h1>{newInstance.title}</h1>
      <p>{newInstance.body}</p>
      <br />
      <Link href='/'>Go back</Link>
    </div>
  )
}

//this get called on every request and only runs on thw server
//link and router also trigger a getServerside props
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const newInstance = await res.json()
    return {
        props: {
            newInstance
        }
    }

} 

export const getStaticPaths= async () => {
     const res = await fetch(
       `https://jsonplaceholder.typicode.com/posts?_limit=3`
     );
     const newInstance = await res.json();

     const ids = newInstance.map((article) => article.id);

     const paths = ids.map((id) => ({params: {id: id.toString()}}));

     return {
         paths,
         fallback: false
     }
}


export default Article
