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
      <form  onSubmit={this._handleSubmit.bind(this)}>
      <label>
        Link
        <input placeholder='Link' ref={(input)=>this._link=input} />
      </label>

      <label>
        Description
        <textarea placeholder='Description' ref={(textarea)=>this._description=textarea}>
        </textarea>
      </label>

      <label>
        Section
        <select ref={(select)=>this._section = select }>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
        </select>
      </label>
      <button type='submit'>Post bookmark</button>
      </form>
    );
  }

  _handleSubmit(event){
    event.preventDefault();

    let section=this._section;
    let description=this._description;
    let link = this._link;
    let created = new Date();
    this._link='';
    this._description='';
    this._created='';
    this.props.addBM(link.value,description.value,section.value,created.value);
  }

}


class BMBox extends React.Component{

  constructor(){
    super();
    this.state={
      bookmarks:[
        {id:'1', link:'facebook.github.io/react', description:'Some useful react docs', section:'FrontEnd', created:'28/06/2017 13:43'},
        {id:'2', link:'https://angularjs.org/', description:'Angular official website', section:'FrontEnd', created:'28/06/2017 13:45'}
      ]
    };
  }

  render() {
    const bookmarks = this._getBookmarks();
    return(
      <div>

        <h3>This is the Bookmarks Box</h3>
        <BMForm addBM={this._addBookmark.bind(this)}/>
        {bookmarks}

      </div>
    );
  }

  _addBookmark(link, description, section, created){
    const bookmark = {
      id: this.state.bookmarks.length + 1,
      link,
      description,
      section,
      created
    };
    this.setState({ bookmarks: this.state.bookmarks.concat([bookmark]) });
  }

  _getBookmarks(){

    return this.state.bookmarks.map((bm) => {
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
