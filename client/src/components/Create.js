import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from "react-router-dom";

const ADD_BOOK = gql`
    mutation AddBook(
        $isbn: String!,
        $title: String!,
        $author: String!,
        $description: String!,
        $publisher: String!,
        $published_year: Int!
    ) {
        addBook(
            isbn: $isbn,
            title: $title,
            author: $author,
            description: $description,
            publisher: $publisher,
            published_year: $published_year
        ) {
            _id
        }
    }
`;

function Create(props) {
    var isbn = null;
    var title = null;
    var author = null;
    var description = null;
    var published_year = null;
    var publisher = null;

    const handleSubmit = (e, addBook) => {
        e.preventDefault();
        addBook({
            variables: {
                isbn: isbn.value,
                title: title.value,
                author: author.value,
                description: description.value,
                publisher: publisher.value,
                published_year: parseInt(published_year.value)
            }
        });

        isbn.value = "";
        title.value = "";
        author.value = "";
        description.value = "";
        publisher.value = null;
        published_year = "";
    }

    return (
        <Mutation mutation={ADD_BOOK} onCompleted={() => props.history.push("/")}>
            {(addBook, { loading, error }) => (
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <br />
                            <h3 className="panel-title">
                                ADD BOOK
                            </h3>
                        </div>
                        <div className="panel-body">
                            <h4>
                                <Link to="/" className="btn btn-primary">Book List</Link>
                            </h4>
                            <form onSubmit={(e) => handleSubmit(e, addBook)}>
                                <div className="form-group">
                                    <label htmlFor="isbn">ISBN:</label>
                                    <input type="text" className="form-control" name="isbn"
                                        ref={(node) => isbn = node} placeholder="ISBN"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" name="title"
                                        ref={(node) => title = node} placeholder="Title"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author">Author:</label>
                                    <input type="text" className="form-control" name="author"
                                        ref={(node) => author = node} placeholder="Author"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description:</label>
                                    <textarea className="form-control" name="description"
                                        ref={(node) => description = node} placeholder="Description" cols="80" rows="3"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author">Publisher:</label>
                                    <input type="text" className="form-control" name="publisher"
                                        ref={(node) => publisher = node} placeholder="Publisher"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author">Published Year:</label>
                                    <input type="number" className="form-control" name="published_year"
                                        ref={(node) => published_year = node} placeholder="Published Year"
                                    />
                                </div>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                            {loading && <p>Loading...</p>}
                            {error && <p>Error : Please try again</p>}
                        </div>
                    </div>
                </div>
            )}
        </Mutation>
    );
};

export default Create;