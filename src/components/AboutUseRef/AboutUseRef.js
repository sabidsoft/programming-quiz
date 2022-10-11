import React from 'react';

const AboutUseRef = () => {
    return (
        <div className='w-[90%] md:w-[80%] mx-auto shadow-lg bg-slate-100 py-10 px-8 md:px-16 mb-20 rounded'>
            <h1 className='text-3xl text-center font-semibold mb-10'>useRef Hook</h1>
            <p className='text-lg leading-8'>
                The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
            </p>
        </div>
    );
};

export default AboutUseRef;