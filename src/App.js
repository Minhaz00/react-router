import './App.css';
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Product from './Components/Products/Product';
import Main from './layout/Main';
import Friends from './Components/Friends/Friends';
import Profile from './Components/Profile/Profile';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';
import Countries from './Components/Countries/Countries';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {

    const router = createBrowserRouter([
        // { path: '', element: <Home></Home> },
        // { path: '/home', element: <Home></Home> },
        // { path: '/about', element: <About></About> },
        // { path: '/contact', element: <div>this is contact page</div> },
        // { path: '/products', element: <Product></Product> },


        {
            path: '/',
            element: <Main></Main>,
            children: [
                { path: '', element: <Home></Home> },
                { path: '/home', element: <Home></Home> },
                { path: '/about', element: <About></About> },
                { path: '/products', element: <Product></Product> },

                {
                    path: '/friends',
                    loader: async () => {
                        return fetch('https://jsonplaceholder.typicode.com/users')
                    },
                    element: <Friends></Friends>
                },

                {
                    path: '/friend/:friendId',
                    loader: async ({params}) => {
                        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
                    },
                    element: <Profile></Profile>
                },

                {
                    path: '/posts',
                    loader: async () => {
                        return fetch('https://jsonplaceholder.typicode.com/posts')
                    },
                    element: <Posts></Posts>
                },
                
                {
                    path: '/posts/:postId',
                    loader: async ({params}) => {
                        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
                    },
                    element: <PostDetails></PostDetails>
                },

                {
                    path: '/countries',
                    loader: async () => {
                        return fetch('https://restcountries.com/v3.1/all');
                    },
                    element: <Countries></Countries>
                },

                {
                    path: 'countries/:name',
                    loader: async ({ params }) => {
                        return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
                    },
                    element: <CountryDetails></CountryDetails>
                }

            ]
        },
        { path: '*', element: <div>This is invalid route 404!</div> }
    ])

    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
