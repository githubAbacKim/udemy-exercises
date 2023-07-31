// getter and setter

const movieHandler = () =>{
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if(
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ){
        return;
    }

    const newMovie = {
        info: {
            set title(val) {
                if(val.trim() === ""){
                    this._title = 'DEFAULT';
                    return;
                }
                this.title=val;
            },

            get title(){
                return this._title;
            },
            [extraName]:extraValue,
            id: Math.random().toString(),
            getFormattedTitle(){
                console.log(this);
                return this.info.title.toUpperCase();
            }
        }
    }

    newMovie.info.title = title;
    console.log(newMovie.info.title)

    movies.push(newMovie)
    renderMovies
}