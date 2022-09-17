import React from 'react'; // Import the Component component from React
import '../App.css';
import styled from 'styled-components';

var projectLogo;

const Styles = styled.div`

imagen {
    display: {${projectLogo}}
    width: 20px;
    }
}

`;

const styles = {
    title: {

        fontFamily: 'Days One',
        // fontWeight: 'bold',


    },

    category: {

        fontFamily: 'Turret Road',
        fontWeight: 'bold',

    },

    technology: {

        fontFamily: 'Turret Road',
        fontWeight: 'bold',

    },

};

export const Thumbnail = (props) => {
    return (
        <Styles>
            <div>
                <h3><div style={styles.icon} className={props.icon}> {props.icon} </div></h3>
                <h3><div style={styles.title} className={props.title}>{props.title}</div></h3>
                <h4><div style={styles.category} className={props.category}>{props.category}</div></h4>
                <h5><div style={styles.technology} className={props.technology}>{props.technology}</div></h5>
            </div >
        </Styles>
    )
};
export default Thumbnail;