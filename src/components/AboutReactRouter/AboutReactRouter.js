import React from 'react';

const AboutReactRouter = () => {
    return (
        <div className='w-[90%] md:w-[80%] mx-auto shadow-lg bg-slate-100 py-10 px-8 md:px-16 mb-20 rounded'>
            <h1 className='text-3xl text-center font-semibold mb-10'>Purpose of React Router</h1>
            <p className='text-lg leading-8'>
                React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
            </p>
        </div>
    );
};

export default AboutReactRouter;