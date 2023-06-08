import { click } from "@testing-library/user-event/dist/click";

const Book = ({ img, title, author, id }) => {
    const  clickHandler = (e) => {
        alert('hey you!');
        console.log(e.target.id);
    }
    const anotherExample = (button) => {
        console.log(author);
    }
    return(
        <div className="book" onMouseOver={() => {
            console.log((click));
        }}>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button  id={id} type="button" onClick={clickHandler}>example</button>
            <button  type="button" onClick={() =>anotherExample(author)}>Another example</button>
        </div>
    )
}

export default Book;