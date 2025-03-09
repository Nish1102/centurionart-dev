const notFound = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>404 - Page Not Found</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                text-align: center;
                                background-color: #f8d7da;
                                margin: 0;
                                padding: 50px;
                            }
                            .container {
                                background: white;
                                padding: 30px;
                                border-radius: 10px;
                                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                                display: inline-block;
                            }
                            h1 {
                                color: #721c24;
                                font-size: 48px;
                            }
                            p {
                                color: #666;
                                font-size: 20px;
                            }
                            a {
                                display: inline-block;
                                margin-top: 20px;
                                padding: 10px 20px;
                                font-size: 18px;
                                color: white;
                                background-color: #dc3545;
                                text-decoration: none;
                                border-radius: 5px;
                            }
                            a:hover {
                                background-color: #c82333;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>404</h1>
                            <p>Oops! The page you're looking for does not exist.</p>
                            <a href="/">Go Back Home</a>
                        </div>
                    </body>
                    </html>
                    `;

const welcome = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Welcome to Centurion Art</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                text-align: center;
                                background-color: #f4f4f4;
                                margin: 0;
                                padding: 100px;
                            }
                            .container {
                                background: white;
                                padding: 30px;
                                border-radius: 10px;
                                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                                display: inline-block;
                            }
                            h1 {
                                color: #333;
                                font-size: 42px;
                            }
                            p {
                                color: #666;
                                font-size: 20px;
                            }
                            a {
                                display: inline-block;
                                margin-top: 20px;
                                margin: 5px;
                                padding: 10px 30px;
                                font-size: 18px;
                                color: white;
                                background-color: #007bff;
                                text-decoration: none;
                                border-radius: 5px;
                            }
                            a:hover {
                                background-color:rgb(15, 244, 133);
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>Welcome to Centurion Art!</h1>
                            <p>Your server is running smoothly.</p>
                            <a href="/api-docs">Explore API</a>
                        </div>
                    </body>
                    </html>
                    `;

module.exports = {
    notFound,
    welcome
}