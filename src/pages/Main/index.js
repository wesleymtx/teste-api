import React from 'react'
import axios from  'axios'
import Gallery from '../../Components/Gallery/Gallery'
import Search from '../../Components/Search/Search'
import Title from '../../Components/Title/Title'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={fotos: [], tag: 'cat'}
    }
    
    Submit = (event) => {
        let value = event.target.firstChild.value;
        
        this.setState({tag: value})
        
        event.preventDefault();
        
    }
    render(){
        let { fotos } = this.state;
        return (
            <div>
                <Title></Title>
                <Search Submit={this.Submit}/>
                <Gallery albumn={fotos}/>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        let {tag} = this.state;
        if (prevState.tag !== this.state.tag) {
            axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=95c1dcca5b768b2f14bd297113c629dd&tags='+tag+'&format=json&nojsoncallback=1&')
            .then(({data})=>this.setState({fotos: data.photos.photo}))
        }
      }

    componentWillUnmount(){
        this.setState({})
    }
    componentDidMount(){
        let {tag} = this.state;
        axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=95c1dcca5b768b2f14bd297113c629dd&tags='+tag+'&format=json&nojsoncallback=1&')
        .then(({data})=>this.setState({fotos: data.photos.photo}))
    }
}

export default Main;