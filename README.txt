1. Multipages in a Single Page Application: 

- This is achieved not by actually having multiple Page
but by rendering different part of the page conditionally
based on what option was chosen

- We gonna use Router Package for passing URL path that will
conditionally render the components in the page

- Tasks of a ROUTER PACKAGE: 
+, Parses URL / Path
+, Read Config
+, Render the appropriate components
THIS WHOLE MODULE IS ABOUT USING ROUTER PACKAGE TO 
HAVE MULTI PAGES FEELING IN A SPA

2. Tool used: 

- react routing and routing rendering package: 
$ npm install --save react-router react-router-dom

- Enabling routing in react app: 
go to App.js (or index.js file)

+, in  App.js: 
import { BrowserRouter } from "react-router-dom";
+, Wrap everything in BrowserRouter tag (in App.js)
 => now you can use routing features

 3. Routing Features Basic: 
 - Setting up and Rendering Route: 
 +, In Blog.js: 
 import { Route } from "react-router-dom";

 rendering JSX: 
// Rendering JSX code
// with out exact, any path with / will show 
// the h1 Home. for ie: localhost:3000/hehe > will show
// with exact only localhost:3000 show
<Route path='/' exact render={() => <h1>Home</h1>} />

rendering component: 
<Route path='/' exact component={Posts} />

- Switching different pages (reloaded):
+, Add new Route path like above with a button that lead to 
route path > it will get reloaded and render the new page

<a href='/new-post'>New Post</a>
<Route path='/new-post' exact component={NewPost} />

- Preventing Reload, only Re-render: 
using Link in react-router-dom
See it in Blog.js

4. Routing Features Advanced: 

- Passing props that React passed automatically 
(to have to correct path and all the need Routing properties 
for usage) > See in Post.js, see withRouting feature

- Absolute vs Relative Path: not really understand, 
See article in video 200

- NavLink added the active page styling. Link doesn't, 
That the only different between those, see Blog.js for 
ie

- Parsing Query Parameters & the Fragment: See video
204

- Navigating Programmatically (instead of using <Link>): 
remove <Link> in Posts.js and use this function > it will 
work exactly the same: 

postSelectedHandler = (id) => {
    this.props.history.push({ pathname: "/" + id });
};

5. Understanding Routing Path: 
- path="/:id" : indicate dynamic path that will be
passed by the Link. See in Blog.js

- Example case scenario for routing issue: 

<Switch>
    <Route path='/' exact component={Posts} />
    <Route path='/new-post' component={NewPost} />
        
        {/* The path='/:id' would also interpret /new-post
        as an id. It regcognize the :id part after the
        /. 
        
        If we have path='/posts/:id', the issue wont
        happens, However, we choose to use switch for this
        to show some of react-routing features
        
        Switch Only renders the 1st route
        that it found that match the given URL
        
        Another problem is when we put the path='/:id'
        , it will mis interpret and render the FullPost
        compoenent when we hit the NewPost. So path=':/id'
        should stay behind the path='/new-post'
        */}

    <Route path='/:id' exact component={FullPost} />
</Switch>

- Nested Routing: Blog (routing to Posts) > in Posts: 

<Link to={this.props.match.url + "/" + post.id} key={post.id}>

<Route path={this.props.match.url + '/:id'} 
exact component={FullPost} />