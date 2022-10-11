import React from 'react'

const AboutContextApi = () => {
    return (
        <div className='w-[90%] md:w-[80%] mx-auto shadow-lg bg-slate-100 py-10 px-8 md:px-16 mb-20 rounded'>
            <h1 className='text-3xl text-center font-semibold mb-10'>How Does Context Api Works?</h1>
            <p className='text-lg leading-8'>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
            </p>
        </div>
    )
}

export default AboutContextApi