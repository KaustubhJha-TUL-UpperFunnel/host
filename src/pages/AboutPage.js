import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props){
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                I am a student pursuing Coumpter Science Engineering in PES College, Bangalore Karnataka, currently in 6th Sem.
                I have always been fascinated by the Web and it's architecture and how things work they way they are supposed 
                to work.
                <br /><br />
                As I currently stand my interest lies solely on development whether it be Back-end or Front-end or Machine 
                Learning Models but I consider all change to be a good change and saying that I am not afraid to transition my
                skills and time to any other field.
                <br /><br />
                I have also had the taste for Game Development and Cyber Security for a while now after I started exploring 
                those field.
                <br /><br />
                As for my personal interest I am heavily fond of learning all sort of South-Eastern Languages mainly due to the
                fact I enjoy thier various Art-styles and Cinematography.Also I love how Indian Politics, Religion and Media 
                clash over several issues and how time and time again leftist are put in there places.
                <br /><br />
                I was there when VINE was still a thing and tik-tok did not rule over the world, they were....simpler times.
                <br /><br />
            </Content>
        </div>
    )
}

export default AboutPage;