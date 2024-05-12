import BlogHome from "../components/BlogHome"
import HomeAppSection from "../components/HomeAppSection"
import TeamHome from "../components/TeamHome"
import CoursesHome from "../components/CoursesHome"
import DemoHome from "../components/DemoHome"

function Home() {
    return (
        <div className="homepage">
            <div className="p-5 bg-primary"></div>
            <HomeAppSection />
            <DemoHome />
            <TeamHome />
            <CoursesHome />
            <BlogHome />
        </div>
    );
}

export default Home;