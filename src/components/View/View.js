import React from "react";
import "./View.css";
import Div from "../Div";

const styles = {
    iframe: {
        width: '90%', 
        height: '90vh', 
        verflow: 'auto', 
        position: 'absolute', 
        zIndex: 1,  
        margin: 'auto', 
        top: '0', 
        left: '0', 
        bottom: '0', 
        right: '0'
    },
    flexBox: {
        width: '100%', 
        height: '100%', 
        backgroundColor: 'red', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column', 
        position: 'absolute', 
        zIndex: 3
    },
    coverPage: {
        alignSelf: 'center',
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column'
    },
    button: {
        padding: 10, 
        borderRadius: 20, 
        backgroundColor: 'red', 
        border: 'white solid', 
        color: 'white', 
        fontSize: '1.5em',
        alignSelf: 'center'
    },
    span: {
        padding: '10px 5px',
        position: 'absolute',
        left: '0',
        bottom: '0',
        zIndex: 2
    }
}

const View = (props) => (
    <Div id={props.sectionID} style={props.fontColor}>
        <iframe id='iframe' title={props.emotion} frameBorder='0' style={styles.iframe}/>
        <div>
            <div style={styles.flexBox}>
                <div style={styles.coverPage}>
                <h1 style={{textAlign: 'center'}}>{props.title}</h1>
                <h3 style={{textAlign: 'center'}}>{props.projectTitle}</h3>
                <h5 style={{textAlign: 'center'}}>{props.projectSkills}</h5>
                <button onClick={props.onClickButton} style={styles.button}>view</button>
            </div>
            <span onClick={props.autoScrollHome} style={styles.span}>{props.lowerLeft}</span>
            <span onClick={props.autoScrollExcellence} style={styles.span}>{props.lowerRight}</span>
          </div>
          {/* these are a set of link and extra info to remind the viewer that they are currently on my website and not on one of th other websites they are looking at */}
          {/* <span style={{position: 'absolute', zIndex:0,  margin: 'auto', top: '0', left: '0', bottom: '0', right: '0', height: '3em', fontSize: '3em', width: '30vw', textAlign: 'center'}}> Loading </span>
          <span style={{padding: '10px 5px', position: 'absolute', top: '0', left: '0', zIndex: 2}}><a href='https://github.com/IanPriceMB/newFFXTrivia' target='_blank'>Final Fantasy X Trivia: Remastered</a></span>
          <span onClick={(e) => closeSite('passion', e)} style={{padding: '10px 5px', position: 'absolute', top: '0', right: '0', zIndex: 2}}>close site</span>
          <span onClick={(e) => autoScroll('home')} style={{padding: '10px 5px', position: 'absolute', left: '0', bottom: '0', zIndex: 2}}>Home</span>
          <span onClick={(e) => autoScroll('excellence')} style={{padding: '10px 5px', position: 'absolute', right: '0', bottom: '0', zIndex: 2}}>Excellence</span> */}
          </div>)}
    </Div>
);

export default View;