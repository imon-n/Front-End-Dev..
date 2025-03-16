<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Events</title>
</head>

<body>
    <button id="btn-mouse">Micky mouse minnie</button>
    <input id="user-name" placeholder="Your Name" type="text">
    <input id="user-email" placeholder="Your Email" type="text">
    
    <script>
        // document.getElementById('btn-mouse')
        //     .addEventListener('mouseenter', function(){
        //         console.log('eveent triggered')
        //     })
        // document.getElementById('btn-mouse')
        //     .addEventListener('mousemove', function(){
        //         console.log('eveent triggered')
        //     })
        // document.getElementById('btn-mouse')
        //     .addEventListener('mouseout', function(){
        //         console.log('eveent triggered')
        //     })

        // document.getElementById('user-name')
        //     .addEventListener('focus', function () {
        //         console.log('user about to write name')
        //     })
        // document.getElementById('user-email')
        //     .addEventListener('focus', function () {
        //         console.log('user about to write email')
        //     })
        // document.getElementById('user-name')
        //     .addEventListener('blur', function () {
        //         console.log('user done with name')
        //     })
        // document.getElementById('user-email')
        //     .addEventListener('blur', function () {
        //         console.log('user done with email')
        //     })


        //  document.getElementById('user-name')
        //     .addEventListener('keydown', function (event) {
        //         console.log('typing', event.target.value)
        //     })
         document.getElementById('user-name')
            .addEventListener('keyup', function (event) {
                console.log('typing', event.target.value)
            })
    </script>
</body>

</html>