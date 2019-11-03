import React, { Component } from 'react';
import MoviesTable from './common/moviesTable'
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../Utils/paginate'
import _ from 'lodash'

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc' }
  }

  componentDidMount() {
    const genres = [{_id: '', name: 'All Genres'}, ...getGenres()]

    this.setState({ movies: getMovies(), genres })
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(x => x._id !== movie._id)
    this.setState({ movies })
  }

  handleLike = movie => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index] = { ...movies[index] }
    movies[index].liked = !movies[index].liked
    this.setState({ movies })
  }

  hadlePageChange = page => {
    // console.log("page=", page)
    this.setState({ currentPage: page })
  }

  handGenreSelect = genre => {
    this.setState( {selectedGenre: genre, currentPage: 1} )
  }

  handleSort = path => {
    const sortColumn = {...this.state.sortColumn}
   
    if(sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
    else{
      sortColumn.path = path
      sortColumn.order = 'asc'
    }

    this.setState( { sortColumn } )
  }

  render() {
    const { length: count } = this.state.movies
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies
    } = this.state;

    if (count === 0)
      return <p>There are no movies.</p>

    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    const movies = paginate(sorted, currentPage, pageSize)

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handGenreSelect}
          />
        </div>

        <div className="col">
          <p>Showing {filtered.length} movies:</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.hadlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
