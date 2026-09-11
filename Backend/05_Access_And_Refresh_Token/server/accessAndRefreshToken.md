Access Token and Refresh Token Explained: What I Learned ?

While learning authentication in MERN stack, I came across two terms that were confusing at first: Access Token and Refresh Token.

Initially, I thought one JWT token was enough for authentication. But after understanding how real applications handle login sessions, I learned why both tokens are used.

What is an Access Token?

An access token is used to access protected resources or APIs.

For example, after logging in, the server gives the user an access token. When the user wants to access something like their profile, the token is sent with the request.

Login → Server → Access Token

The access token usually has a short lifetime, such as 15 minutes or 1 hour.

The reason for keeping it short is security. If someone gets the access token, they can use it until it expires.

What is a Refresh Token?

A refresh token is used to get a new access token when the old access token expires.

Instead of asking the user to log in again every few minutes, the application can use the refresh token to generate a new access token.

The basic flow is:

User Login
    ↓
Access Token + Refresh Token
    ↓
Access Token expires
    ↓
Send Refresh Token
    ↓
Server verifies it
    ↓
New Access Token

Depending on the application's design, the server may also rotate the refresh token and issue a new refresh token.

Why do we need two tokens?

This was the main thing I understood while learning this topic.

If we use one token with a very long expiry time, it can become a security problem if that token gets stolen.

If we use a very short-lived token without a refresh mechanism, the user would have to log in repeatedly.

So the two-token approach gives us a balance:

Token	Purpose	Lifetime
Access Token	Access protected APIs	Short
Refresh Token	Get a new access token	Longer
Where are they stored?

A common approach is to keep the refresh token in an HTTP-only cookie.

An HTTP-only cookie cannot be directly accessed by JavaScript running in the browser, which helps reduce the risk of token theft through certain XSS attacks.

The access token can be kept in memory or handled through a cookie depending on the application's authentication design.

Simple Example

Suppose I log into a website.

The server verifies my email and password and returns:

Access Token  → expires in 15 minutes
Refresh Token → expires in several days

For the next 15 minutes, I can use the access token to call protected APIs.

After 15 minutes, the access token expires. Instead of logging in again, the application sends the refresh token to the server.

If the refresh token is valid, the server provides a new access token.

This allows the user to stay logged in without continuously entering their password.

What I understood from this

The important thing I learned is that access and refresh tokens have different jobs.

The access token is basically used for accessing protected resources, while the refresh token is used for getting a new access token.

Understanding this made JWT authentication much clearer to me. Earlier, I was mainly focused on creating a JWT and verifying it. Now I understand that authentication is not just about creating a token; token lifetime, storage, expiration, and renewal are also important parts of building a secure authentication system.

Conclusion

Access and refresh tokens are commonly used together to make authentication both secure and convenient.

The simple idea I keep in mind is:

Access token = use the application
Refresh token = get a new access token

This was one of the concepts that helped me understand authentication more practically while working with Node.js, Express.js and JWT.