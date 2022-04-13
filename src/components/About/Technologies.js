import {
    TechnologiesGrid,
} from './AboutElements';

const Technologies = () => {
    const technologies = ["JavaScript", "CSS", "Laravel", "ReactJS", "HTML", "mySQL", "C++", ".NET", "PHP"];

    const onHoverTech = (property) => {
        const targetClass = property.nativeEvent.srcElement.className;
        document.getElementsByClassName(targetClass)[0].style.fontSize ='38px';
        document.getElementsByClassName(targetClass)[0].style.color ='#e68a00';
        document.getElementsByClassName(targetClass)[0].style.padding ='0px';
        document.getElementsByClassName(targetClass)[0].style.cursor ='default';
        }

    const offHoverTech = (property) => {
        const targetClass = property.nativeEvent.srcElement.className;
        document.getElementsByClassName(targetClass)[0].style.fontSize ='28px';
        document.getElementsByClassName(targetClass)[0].style.color ='#cfd5e8';
        document.getElementsByClassName(targetClass)[0].style.padding ='5px';
    }

    const listTechnologies = technologies.map((tech, i) =>
        <TechnologiesGrid className={"tech-" + i} key={i} onMouseOver={onHoverTech}
            onMouseLeave={offHoverTech}>{tech}</TechnologiesGrid>
    );

    return (
        <>{listTechnologies}</>
    )
}

export default Technologies;