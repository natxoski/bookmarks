class BM extends React.Component{
  render() {
    return (
      <div>
        <a href='#'>{this.props.link}</a>
        <p>description {this.props.description}</p>
        <p>Section {this.props.section}</p>
        <p>Created on:{this.props.created}</p>
      </div>
    );
  }
}


class BMForm extends React.Component{
  render(){
    return(
      /*
      <label>Link<input placeholder='' ref={
        (input) => this._link=input
        }></label>
      <label>Description<input placeholder=''
      ref={()=>this._description}></label>
      <label>Description
      <select>
        <option></option>
        <option></option>
        <option></option>
      </select>
      ref={()=>this._section}></label>
    */
    );
  }
}


class BMBox extends React.Component{


  render() {
    const bookmarks = this._getBookmarks();
    return(
      <div>

        <h3>This is the Bookmarks Box</h3>
      //  <BMForm addBookmark={this._addBookmark.bind(this)}/>
        {bookmarks}

      </div>
    );
  }

  _addBookmark(link, description, section){
    const bookmark = {
      id: this.state.bookmarks.length + 1;
      link,
      description,
      section,
      created: new Date();
    };
    this.setState({ bookmarks: this.state.comments.concat([bookmark]) });
  }

  _getBookmarks(){
    const bookmarksList=[
      {id:'1', link:'facebook.github.io/react', description:'Some useful react docs', section:'FrontEnd', created:'28/06/2017 13:43'},
      {id:'2', link:'https://angularjs.org/', description:'Angular official website', section:'FrontEnd', created:'28/06/2017 13:45'}
      ];

    return bookmarksList.map((bm) => {
      return (
        <BM
          link={bm.link}
          description={bm.description}
          section={bm.section}
          created={bm.created}
          key={bm.id}
        />
      );
    });

  }
}

class App extends React.Component{
  render() {
    return(
      <div className='col-xs-10 col-xs-offset-1' >
          <BMBox />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('bookmarks-app'));
