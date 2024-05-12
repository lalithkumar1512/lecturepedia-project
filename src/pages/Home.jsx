import BlogHome from "../components/BlogHome"
import TeamHome from "../components/TeamHome"
import CoursesHome from "../components/CoursesHome"
import DemoHome from "../components/DemoHome"

function Home() {
    return (
        <div className="homepage">
            <div className="mb-5 mt-5 p-3 bg-primary">&nbsp;</div>
            <DemoHome />
            <TeamHome />
            <CoursesHome />
            <BlogHome />
        </div>
    );
}

export default Home;