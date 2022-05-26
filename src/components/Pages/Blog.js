import React from 'react';

const Blog = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <h5 className='text-center'>Blogs</h5>
                <div className="col py-3">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h5><span><i className="fa-solid fa-circle-arrow-right"></i></span> How will we improve the performance of a React Application?</h5>
                            <p>To optimize React rendering, we need to make sure that components receive only necessary props. It will let we control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.And

                                Keeping component state local where necessary
                                Memoizing React components to prevent unnecessary re-renders
                                Code-splitting in React using dynamic import()
                                Windowing or list virtualization in React
                                Lazy loading images in React.
                            </p>
                            <h5><span><i className="fa-solid fa-circle-arrow-right"></i></span> What are the different ways to manage a state in a React application?</h5>
                            <p>React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings. The state is just a fancy term for a JavaScript data structure.5 Types of Application State in React and How They Help in State Management. Data State
                                Control State
                                Session State
                                Location State
                                Conclusion.</p>
                            <h5> <span><i className="fa-solid fa-circle-arrow-right"></i></span> How does prototypical inheritance work?</h5>
                            <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                                Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                                JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</p>
                            <h5><span><i className="fa-solid fa-circle-arrow-right"></i></span> Why we do not set the state directly in React</h5>
                            <p>One should never update the state directly because of the following reasons:If we update it directly, calling the setState() afterward may just replace the update you made.When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.We will lose control of the state across all components.</p>

                            <h5> <span><i className="fa-solid fa-circle-arrow-right"></i></span> What is a unit test? Why should write unit tests?</h5>
                            <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently also Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;