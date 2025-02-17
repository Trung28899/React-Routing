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

- Redirecting path: See Blog.js
<Redirect from='/' to='/posts/' />

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

6. Routing tricks: 
- Redirect conditionally: using state

See NewPost.js
hit "Add Post" > Redirected to /posts
might have to wait a little for http request

- Using the history Prop to Redirect: implement this code
after a http call was successfully done 
(see in NewPost.js > postDataHandler())
this.props.history.push("posts");
or
this.props.history.replace("posts");

- Working with guard: The idea is to have a auth state
that conditionally render the route component

For ie: 
{this.state.auth ? (
            <Route path='/new-post' component={NewPost} />
        ) : null}

- Handling 404 case: can try to implement in Blog.js
+, When there is no path matching the Route that are 
specified in the <Switch>. Should show some kind of 404 Not found
page

+, Inside <Switch>, implement the LAST ROUTE 
<Route render={() => <h1>404 Not Found !</h1>}>
so that when the page doesn't find the correct Route, 
it will display the Not Found Page

END OF 1ST - 3RD COMMIT
--------------------------------------------------
7. Advanced Technique: 4TH COMMIT
a. Lazy Loading: 
- Is a way of import package dynamically for better 
User Experience
- Created hoc/asyncComponent.js, see how to use it in Blog.js:
how the AsyncNewPost variable is used

END OF 4TH COMMIT
--------------------------------------------------
b. Lazy Loading with React Suspense: 
skip this video, see video 216

c. Routing and Server Deployment: 
See video 217