# Express Middleware Module Project

In this challenge, you build an API and write custom middleware that satisfies the requirements listed under the `Minimum Viable Product` section.

## Instructions

### Task 1: Set Up The Project With Git

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [x] Create a new branch: `git checkout -b <firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: `git push origin <firstName-lastName>`.

### Task 2: Minimum Viable Product

- [x] Write five custom `middleware` functions detailed below, in `api/middleware/middleware.js`.
- [x] Complete the endpoints inside `api/posts/posts-router.js` and `api/users/users-router.js`.
- [x] There are endpoints in `users-router.js` to retrieve the list of `posts` by a `user` and to store a new `post` for a `user`.

#### Custom Middleware Requirements

- [x] `logger()`

  - `logger` logs to the console the following information about each request: request method, request url, and a timestamp
  - this middleware runs on every request made to the API

- [x] `validateUserId()`

  - this middleware will be used for all user endpoints that include an `id` parameter in the url (ex: `/api/users/:id` and it should check the database to make sure there is a user with that id.

  - if the `id` parameter is valid, store the user object as `req.user` and allow the request to continue
  - if the `id` parameter does not match any user id in the database, respond with status `404` and `{ message: "user not found" }`

- [x] `validateUser()`

  - `validateUser` validates the `body` on a request to create or update a user
  - if the request `body` is missing, respond with status `400` and `{ message: "missing user data" }`
  - if the request `body` lacks the required `name` field, respond with status `400` and `{ message: "missing required name field" }`

- [x] `validatePostId()`

  - this middleware will be used for all post endpoints that include an `id` parameter in the url (ex: `/api/posts/:id` and it should check the database to make sure there is a post with that id.
  - if the `id` parameter is valid, store the post object as `req.post` and allow the request to continue
  - if the `id` parameter does not match any post id in the database, respond with status `404` and `{ message: "post not found" }`

- [x] `validatePost()`

  - `validatePost` validates the `body` on a request to create a new post
  - if the request `body` is missing, respond with status `400` and `{ message: "missing post data" }`
  - if the request `body` lacks the required `text` field, respond with status `400` and `{ message: "missing required text field" }`

### Database Persistence Helpers

There are two helper files that you can use to manage the persistence of _users_ and _posts_ data. These files are `users/userDb.js` and `posts/postDb.js`. Both files publish the following api:

- `get()`: calling find returns a promise that resolves to an array of all the `resources` contained in the database.
- `getById()`: takes an `id` as the argument and returns a promise that resolves to the `resource` with that id if found.
- `insert()`: calling insert passing it a `resource` object will add it to the database and return the new `resource`.
- `update()`: accepts two arguments, the first is the `id` of the `resource` to update and the second is an object with the `changes` to apply. It returns the count of updated records. If the count is 1 it means the record was updated correctly.
- `remove()`: the remove method accepts an `id` as it's first parameter and, upon successfully deleting the `resource` from the database, returns the number of records deleted.

The `userDb.js` helper includes an extra method called `getUserPosts()` that when passed a user's `id`, returns a list of all the `posts` for the `user`.

**All helper methods return a promise.**

#### Database Schemas

The _Database Schemas_ for the `users` and `posts` resources are:

##### Users

| field | data type        | metadata                                            |
| ----- | ---------------- | --------------------------------------------------- |
| id    | unsigned integer | primary key, auto-increments, generated by database |
| name  | string           | required, unique                                    |

##### Posts

| field   | data type        | metadata                                            |
| ------- | ---------------- | --------------------------------------------------- |
| id      | unsigned integer | primary key, auto-increments, generated by database |
| text    | text             | required                                            |
| user_id | unsigned integer | required, must be the `id` of an existing `user`    |

We have provided test data for the resources.

### Task 3: Stretch Goals

- Create a React App
  - Use `create-react-app` to create an application inside the root folder, name it `client`.
  - From the React application connect to the `/api/users` endpoint in the API and show the list of users.
  - Add functionality to show the details of a user, including their posts, when clicking a user name in the list. Use React Router to navigate to a `/users/:id` route to show the user details.
  - Add styling!

## Submission format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge `<firstName-lastName>` Branch into main (student's Repo). **Please don't merge your own pull request**
