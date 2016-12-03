<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{ url('/css/app.css') }}">

        <title>Hackaton 2016</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
        
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    <a href="{{ url('/login') }}">Login</a>
                    <a href="{{ url('/register') }}">Register</a>
                </div>
            @endif

            <div class="container text-center">
                <h1>Hackaton 2016</h1>
                <h1>LET'S GO GA2S</h1>
                <button class="btn btn-primary btn-lg">Test</button>
            </div>
        </div>

    <script src="{{ url('/js/jquery.js') }}"></script>
    <script src="{{ url('/js/bootstrap.min.js') }}"></script>
    <script src="{{ url('/js/main.js') }}"></script>
    </body>
</html>
