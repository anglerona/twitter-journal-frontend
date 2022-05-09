// Feel free to ignore, this page, currently a work in a progress for dynamic pages

import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { History: data }
    }
  }
  
  const History = ({ history }) => {
   // console.log(history)
  
    return (
      <div>
        <h1>Past History Check</h1>
        {history.map(history => (
          <Link href={'/history/' + history.id} key={history.id}>
            <a>
              <h3>{ history.name }</h3>
            </a>
          </Link>
        ))}
      </div>
    );
  }
   
  export default History;