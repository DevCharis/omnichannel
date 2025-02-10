# Omnichannel Hub

Omnichannel Hub is a web-based portal designed to provide a seamless user experience for managing multiple communication channels efficiently.

## Features
- User authentication with OTP verification
- Secure session management
- Responsive navigation menu
- Profile management
- Logout functionality with session clearing

## Technologies Used
- HTML, CSS, JavaScript
- Session Storage for authentication
- GitHub Pages for deployment

## Authentication Flow
1. Users enter their credentials on `login.html`.
2. If valid, an OTP is generated and must be entered.
3. Upon successful OTP verification, the user is redirected to `index.html`.
4. Unauthorized access to `index.html` or `profile.html` redirects the user back to `login.html`.

## Deployment
The project is hosted on **GitHub Pages**:  
[Omnichannel Hub](https://devcharis.github.io/omnichannel/index.html)

## Known Issues
- Ensure session management works correctly across different browsers.
- GitHub Pages may require case-sensitive URL adjustments.

## Contributing
Feel free to fork this repository and submit pull requests.

## License
This project is licensed under the MIT License.

