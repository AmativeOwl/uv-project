# UV Tracker
The UV Tracker displays the current UV index at the users' current location, enabling users to subscribe and receive email notifications when the UV index is classified as "high" according to 
[Cancer Council's UV Index](https://www.cancer.org.au/cancer-information/causes-and-prevention/sun-safety/uv-index).

This was created with the [OpenUV.io](https://www.openuv.io/) API.

## Table of Contents
[Important Notes](#notes) <br>
[Tech Stack](#tech-stack) <br>
[Prerequisites](#prerequisites) <br>
[Installation](#installation) <br>
[Usage](#usage)

## Important Notes <a id="notes"></a>
The OpenUV.io API's free plan has a daily API quota that if exceeded, will cause the website to not load. For higher usage, you may upgrade to a paid plan, which offers more API requests per day.

## Tech Stack <a id="tech-stack"></a>
**Frontend**: EJS, CSS, Javascript <br>
**Backend**: Node.js, Express, Axios, jQuery, body-parser, EmailJS

## Prerequisites <a id="prerequisites"></a>
#### 1. Node.js and NPM
To run the UV Tracker project locally and install necessary dependencies, you need to have Node.js and NPM installed on your machine.
<ul>
  <li>To install Node.js, visit https://nodejs.org/en and download the latest LTS version for your operating system.</li>
  <li>After installation, verify that they has been downloaded by running:</li>
</ul>

```bash
node -v
npm -v
```
This outputs the current versions of Node.js and NPM on your local machine.

#### 2. OpenUV.io API token <br>
To access the OpenUV.io API and retrieve the UV index data, you need an API token.
<ul>
  <li>Sign up at https://www.openuv.io/</li>
  <li>You can find your API token in the dashboard</li>
</ul>

#### 3. EmailJS Account
To send emails when the UV index reaches a "high" level, you'll need an EmailJS account.
<ul>
  <li>Sign up at https://dashboard.emailjs.com/sign-in</li>
  <li>Create a new email service and template under "Email Services" and "Email Templates" respectively</li>
  <ul>
    <li>The template can be a simple message e.g. The UV index is quite high today. Make sure to protect yourself! </li>
  </ul>
  <li>Retrieve your Public Key under "Accounts", Service ID under "Email Services" and Template ID under "Email Templates"</li>
</ul>
  
## Installation <a id="installation"></a>
Follow these steps to install and run the UV Tracker project locally:

#### 1. Clone the repository
```bash
git clone https://github.com/AmativeOwl/uv-project.git
```

#### 2. Navigate to the project folder 
```bash
cd uv-project
```

#### 3. Install dependencies 
```bash
npm install
```

#### 4. Set up environment variables 
Create an .env file in the root directory:
```bash
touch .env
```

Add the following lines (replace placeholders with your OpenUV credentials):
```bash
token = "your_token"
```

#### 5. Navigate to the public folder
Under script.js, replace the following placeholders with your EmailJS credentials:
```bash
let email_init = "your_public_key"; // Ctrl C + V your EmailJS API Public Key here 
let email_service_id = "your_service_id"; // Ctrl C + V your EmailJS service ID here
let email_template_id = "your_template_id"; // Ctrl C + V your EmailJS template ID here 
```

Once you are complete with this, navigate to the root directory:
```bash
cd ..
```

#### 6. Start the server 
Either start the Express server with npm:
```bash
npm start
```
Or nodemon: 
```bash
nodemon index.js
```

#### 7. Open the website in your browser
Visit `http://localhost:3000` in your browser to see the UV Tracker in action.

## Usage <a id="usage"></a>
When the website is running: 
<ol>
  <li>You can view the current UV index at your location.</li>
  <li>Enter your email address in the provided form to subscribe to email notifications when the UV index is considered "high".</li>
  <li>You'll receive an email when the UV index reaches or exceeds a "high" level.</li>
</ol>
