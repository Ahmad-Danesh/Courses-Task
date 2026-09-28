import { useState } from "react";
import Header from "./Header";
import CourseList from "./CourseList";
import MyCourses from "./MyCourses";

const courses = [
    {
        id: 1,
        name: "Push Up Training",
        level: "Beginner",
        price: 5
    },
    {
        id: 2,
        name: "Football Training",
        level: "Intermediate",
        price: 10
    },
    {
        id: 3,
        name: "Karate Basics",
        level: "Beginner",
        price: 8
    },
    {
        id: 4,
        name: "Strength Training",
        level: "Advanced",
        price: 15
    },
    {
        id: 5,
        name: "Running Program",
        level: "Intermediate",
        price: 7
    },
    {
        id: 6,
        name: "Flexibility Training",
        level: "Beginner",
        price: 6
    }
];

export default function App() {
    const [myCourses, setMyCourses] = useState([]);

    function addCourse(course) {
        setMyCourses((myCourses) => [
            ...myCourses,
            course
        ]);
    }

    function removeCourse(id) {
        setMyCourses((myCourses) =>
            myCourses.filter(
                (course) => course.id !== id
            )
        );
    }

    const totalPrice = myCourses.reduce(
        (total, course) => total + course.price,
        0
    );

    return (
        <div className="app">
            <Header courseCount={myCourses.length} />

            <main className="dashboard">
                <CourseList
                    courses={courses}
                    addCourse={addCourse}
                />

                <MyCourses
                    myCourses={myCourses}
                    removeCourse={removeCourse}
                    totalPrice={totalPrice}
                />
            </main>
        </div>
    );
}