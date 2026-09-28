export default function CourseList({
    courses,
    addCourse
}) {
    return (
        <section className="courses">
            <div className="section-top">
                <div>
                    <span className="label">
                        TRAINING PROGRAMS
                    </span>

                    <h2>Choose Your Workout</h2>

                    <p>
                        Pick a program and start
                        your journey.
                    </p>
                </div>

                <div className="course-number">
                    {courses.length} PROGRAMS
                </div>
            </div>

            <div className="course-list">
                {courses.map((course) => (
                    <div
                        className="course-row"
                        key={course.id}
                    >
                        <div className="course-number-box">
                            0{course.id}
                        </div>

                        <div className="course-main">
                            <h3>{course.name}</h3>

                            <div className="course-details">
                                <span>
                                    {course.level}
                                </span>

                                <span>
                                    ${course.price}
                                </span>
                            </div>
                        </div>

                        <button
                            className="add-course"
                            onClick={() =>
                                addCourse(course)
                            }
                        >
                            ADD
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}