export default function MyCourses({
    myCourses,
    removeCourse,
    totalPrice
}) {
    return (
        <aside className="my-courses">
            <div className="my-courses-header">
                <div>
                    <span className="label">
                        YOUR PROGRAM
                    </span>

                    <h2>My Courses</h2>
                </div>

                <div className="circle-count">
                    {myCourses.length}
                </div>
            </div>

            {myCourses.length === 0 ? (
                <div className="empty">
                    <div className="empty-symbol">
                        +
                    </div>

                    <h3>No courses yet</h3>

                    <p>
                        Choose a course to start
                        training!
                    </p>
                </div>
            ) : (
                <>
                    <div className="selected-list">
                        {myCourses.map((course) => (
                            <div
                                className="selected-course"
                                key={course.id}
                            >
                                <div className="selected-icon">
                                    ✓
                                </div>

                                <div className="selected-info">
                                    <h3>
                                        {course.name}
                                    </h3>

                                    <span>
                                        {course.level}
                                    </span>
                                </div>

                                <button
                                    className="remove"
                                    onClick={() =>
                                        removeCourse(
                                            course.id
                                        )
                                    }
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="progress-box">
                        <div className="progress-top">
                            <span>
                                Training Progress
                            </span>

                            <strong>
                                {myCourses.length}/6
                            </strong>
                        </div>

                        <div className="progress">
                            <div
                                style={{
                                    width: `${
                                        (myCourses.length /
                                            6) *
                                        100
                                    }%`
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className="total">
                        <span>Total</span>

                        <strong>
                            ${totalPrice}
                        </strong>
                    </div>

                    <button className="start-button">
                        Start Training →
                    </button>
                </>
            )}
        </aside>
    );
}