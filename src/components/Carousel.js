
import React from 'react';
import Card from '../components/Card';
import devgrub from '../assets/images/git7.jpg';
import youtube from '../assets/images/yt.png';
import evverest from '../assets/images/me.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    state = {
        items: [
            {
                id: 0,
                title: 'Github',
                subtitle: 'You can check out my projects here',
                imgSrc: devgrub,
                link: 'https://github.com/kimj0588',
                selected: false
            },
            {
                id: 1,
                title: 'Linked-in',
                subtitle: 'Go ahead Stalker!!!',
                imgSrc: evverest,
                link: 'https://www.linkedin.com/in/kaustubh-j-74142b164/',
                selected: false
            },
            {
                id: 2,
                title: 'Youtube Channel',
                subtitle: 'There is Nothing here actually',
                imgSrc: youtube,
                link: 'https://www.youtube.com/channel/UCn9WgB6bD2_3ZUJV2_ReClg?view_as=subscriber',
                selected: false
            },
        ]
    }
    


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;