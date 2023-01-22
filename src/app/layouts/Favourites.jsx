import React from "react";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import ProgressBar from "../components/common/ProgressBar";
import BreadCrumbs from "../components/common/BreadCrumbs";
import ProjectSlider from "../components/ui/projectSlider/projectSlider";

const testData = [
    { bgcolor: "red", completed: "25", text: "JS" },
    { bgcolor: "blue", completed: "50", text: "React" },
    { bgcolor: "orange", completed: "100", text: "Scss" }
];
const testSlider = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYao2vCSfNvO4DUjNr_XaFZ7wiNOBGX8zln5TiMq3bHUMnnkee3BAV-ZHxK4t9BaDZhw&usqp=CAU",
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
];

const Favorites = () => {
    return (
        <>
            <Header />
            <Main>
                <BreadCrumbs />
                <Container>
                    <ProjectSlider items={testSlider} />
                    {testData.map((item) => (
                        <ProgressBar
                            progress={item.completed}
                            color={item.bgcolor}
                            text={item.text}
                        />
                    ))}
                </Container>
            </Main>
            <Footer />
        </>
    );
};

export default Favorites;
