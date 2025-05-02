import React from 'react';
import UserLayout from '../../layouts/UserLayout';
const Home = () => {
    return (
        <UserLayout children={
            <div className="home-content">
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page of the user module.</p>
            </div>
        } ></UserLayout>
    );
}

export default Home;