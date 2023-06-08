import './App.css';
import Book from './Book';

import { myBooksArray } from './data/data';

const App = () => {
    return (
        <section className='minibook'>
             {
                myBooksArray.map((book) => {
                   // const {id, title, author, img } = book;
                    return (
                    // <Book id={id} title={title} author={author} img={img}/>
                        <Book key={book.id} {...book}/>
                    )
                })
             }
        </section>
       
    )
}

export default App;