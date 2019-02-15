1. Mention two parts of Express that you learned about this week.

- Two big parts of express that I learned this week would probably be middleware and Routers.

2. Describe Middleware?

- Middleware is a chain of functions that our request and response go through before reaching the actual
  response we want to send back to the client. This is powerful because we can modify data or check for
  values for example, Authorization in the head of the request, before they hit our CRUD routes.

3. Describe a Resource?

- A resource is data on a server that is accessed / managed over a unique URI or sometimes multiple. It is
  accessed / manipulated via our Create Read Update and Delete functions.

4. What can the API return to help clients know if a request was successful?

- It depends on how you want to design it and also it depends on what operation you were doing but for example
  if you were creating something you could send a 201 status and maybe just the new Id for the new item. You could send back the 201 status and then find the newly created item and send that back so the developer can see what it looks like or even add it to the data on the front end so they don't have to make another API call to get the updated list.

5. How can we partition our application into sub-applications?

- We can partition it into sub-applications by using routers. essentialy if we have different resources that we
  want to manage on different URIs then we can create routers for each resource and keep all of the routes concerned with that URI in one file and then just import it into the main server file. This also means that if there's middleware we only want to use on one resource then we can apply that to just the router that needs it. On the flip side we can still apply middleware to all requsts coming in by just adding it to the main server file.
