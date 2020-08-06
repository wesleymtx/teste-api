import React from 'react';
import {Container} from 'reactstrap';
import '../Search/Search.css'
function Search(props){
    return <Container>
        <div>
        <form onSubmit={props.Submit}>
            <input type="text" required="required"/>
            <input type="submit" value="Search"/>
        </form>
        
        </div>
    </Container>
    
}
export default Search;
