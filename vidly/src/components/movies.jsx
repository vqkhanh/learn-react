import React, { Component } from 'react';
import Like from "./common/like";
import {getMovies} from '../services/fakeMovieService';
// import * as ser from "../services/fakeMovieService";


// class Movies extends Component {
//     render() { 
//         var arr = ser.getMovies();
//         console.log("arr=",arr)
//         return (  
//             <div className="col-12">
//                 <table>
//                     <thead className="row">
//                         <tr>
//                             <th className="col-3">title</th>
//                             <th className="col-3">genre</th>
//                             <th className="col-3">numberInStock</th>
//                             <th className="col-3">operation</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {arr.map(x => 
//                             <tr key={x._id}>
//                                 <td>{x.title}</td>
//                                 <td>{x.publishDate}</td>
//                                 <td>{x.numberInStock}</td>
//                                 <td>delete</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         );
        
//     }
// }

class Movies extends Component {
    state = {  
        movies: getMovies()
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(x => x._id !== movie._id)
        this.setState({movies})
    }

    handleLike = movie => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = {...movies[index]}
        movies[index].liked = !movies[index].liked
        this.setState({movies})
    }

    render() { 
        const {length: count} = this.state.movies

        if(count === 0)
            return <p>There are no movies.</p>
        
        return (
            <React.Fragment>
                <p>Showing {count} movies:</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie =>  <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            {/* <td><i className="fa fa-heart-o" aria-hidden="true"></i></td> */}
                            <td>
                                <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/>
                            </td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>)}
                    
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
 
export default Movies;
 