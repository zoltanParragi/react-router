import React from 'react'

export default function VideoSummary() {
    return (
        <>
            <h2>VideoSummary</h2>
            <p>link: <a href="https://www.youtube.com/watch?v=Ul3y1LXxzdU">here</a></p>

            <h4>Istallation</h4>
            <p>npm i react-router-dom</p>
            <p>(other version: react-router-native)</p>

            <h4>First steps</h4>
            <p>BrowserRouter is a React context. Wrap yout entire app into BrowserRouter in main.jsx</p>

            <p>Create pages folder and the pages you want in it.</p>

            <p>App.jsx : Add Routes and Route components. Route: path - url, element - component to show</p>

            <p>Add nav bar outside of the Routes component: nav - ul - li - Link component instead of a tag. Link is an anchor under the hood, but it won't  refresh your entire application.</p>

            <h4>Router types</h4>
            <p>see the router types page</p>

            <h4>Dynamic routes</h4>
            <p>Eg.: /books/:id</p>
            <p>useParams() hook</p>
            <p>and hard coded routes eg.: /books/new - React can distinguish them</p>

            <h4>Not found page</h4>
            <p>path="*"</p>

            <h4>Nested routes</h4>
            <p>You can define a Layout component for the parent Route. So you can create sub menu for a page group. And add the index parameter to the index page of the group.</p>
            <p>Add Outlet component to the Layout component at the end. This renders the content that belongs to the actual link. context parameter in Outlet component - adds extre content to each child component. If you want to use the extra content in a child page you have to use the useOutletContext() hook to get the content.</p>

            <h4>Extra content</h4>
            <p>Add another Routes, Route group to add extra content to a group of pages.</p>

            <h4>useRoutes() hook</h4>
            <p>can achieve exactly the same as nested Routes, Route construct.</p>

            <h4>Navigation</h4>
            <p>from about 30:44</p>

            <h4>Link tag</h4>
            <p>replace property in the Link tag ...</p>
            <p>reloadDocument property in the Link tag ...</p>
            <p>state property in the Link tag</p>

            <h4>NavLink tag</h4>
            <p>Similar to the Link tag. Has the same properties + classNale, style, children</p>
            <p>By default, an active class is added to a NavLink component when it is active so you can use CSS to style it. (1) You can define a class active in a css file to determine the style of the active links. see in code . (2) The className prop works like a normal className, but you can also pass it a function to customize the classNames applied based on the active and pending state of the link. (3)The style prop works like a normal style prop, but you can also pass it a function to customize the styles applied based on the active and pending state of the link. more details <a href="https://reactrouter.com/en/main/components/nav-link">here</a></p>
            <p>You can change the text of a link with the isActive parameter and a function. see Books link in the code.</p>
            <p>Defining an .active class will reach all children links too. The parent will be active when you use the childe link. If you don't want this add 'end' to the parent link. see in code</p>
            <p>Link and NavLink can be used interchangably but Navlink has more styling options.</p>

            <h4>Navigate</h4>
            <p>this component works as Link component with the same properties. It is useful to redirect to a certain page. Eg. add Navigate to the NotFound page an you can redirect user automaticallí to the home page. Or in case of form submission you can redirect users to the login page. ... video 36:00</p>
            <p>useNavigate hook, for redirection after some time ... setTimeout, useEffect is needed ... -1, -2 parameters to navigate backward in the history one or two pages. </p>

            <h4>using serch parameters in a url</h4>
            <p>... see in code in BookLayout component</p>
            <p>useSearchParams() hook works as useState, but it gets and sets the serch param in the actual link</p>

            <h4>useLocation() hook</h4>
            <p>... from about 43:00 in the video</p>
            <p>you can transmit info from a previously visited page to an actual page with it ...</p>
        </>
    )
}
