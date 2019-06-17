import React from 'react'
import './styles/BadgesList.css';

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badges =>{
                    return(
                        <li key={badges.id} className="Badge__section-name-list">
                            <img src={badges.avatarUrl} className="Badge__avatar-list"/>
                        <div>
                            {badges.firstName} {badges.lastName}
                            <br />
                            {badges.title}
                            <br />
                            <span className="twitter__blue_font">{badges.twitter}</span>
                        </div>
                    </li>
                    );
                })}
            </ul>
        );
    }
}
export default BadgesList;
