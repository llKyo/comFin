<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <div class="text-center py-4 titulo five">
                    <h1><b>P</b>roceso <b>E</b>special <b>D</b>e <b>R</b>ecursividad <b>O</b>peracional</h1>
                </div>
                <?php require_once("./template/card-form.php") ?>
                <div class="pt-2">
                    <?php require_once("./template/acordeon.php") ?>
                </div>
            </div>
        </div>
    </div>
    <?php require_once("./template/toast.php") ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>
    <script src="./js/main.js" type="module"></script>
</body>

</html>