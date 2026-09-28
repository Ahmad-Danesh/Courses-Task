export default function Header({ courseCount }) {
    return (
        <header className="header">
            <div className="brand">
                <div className="brand-icon">
                    ⚡
                </div>

                <div>
                    <h1>FitZone</h1>
                    <p>Build your stronger self</p>
                </div>
            </div>

            <div className="header-stats">
                <div className="stat">
                    <span>MY COURSES</span>
                    <strong>{courseCount}</strong>
                </div>

                <div className="profile">
                    👤
                </div>
            </div>
        </header>
    );
}