import React, {Component, Fragment} from 'react';
import UserNavBar from '../../components/User/UserNavBar';
import UserArticlesContainer from './UserArticlesContainer';
import UserInfo from '../../components/User/UserInfo';

export default class UserContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idToRender: this.props.match.params.id,
            user: {}
        };
    }

    componentDidMount() {
        let url =  '/users/' + this.state.idToRender;
        fetch(url)
            .then(request => request.json())
            .then((data) => {this.setState({user: data})})
        
    }

    render() {

        return(
            <Fragment>
                <h3>ID: {this.state.idToRender}</h3>
                <UserNavBar name={this.state.user.name} id={this.state.idToRender}/>
                <UserInfo name={this.state.user.name}/>
                <h4>Here renders UserInfo, remember to add the edit button linking to /user/id/edit</h4>
                <UserArticlesContainer articles={this.state.user._embedded}/>
            </Fragment>
        )
    }


}