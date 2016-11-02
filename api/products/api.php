<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();
$app->register(new JDesrosiers\Silex\Provider\CorsServiceProvider(),[
    'cors.allowOrigin' => '*']);
$app->after($app['cors']);
$app->get('/product', function() {
    $products = json_decode(file_get_contents('products.json'), true);
    return new \Symfony\Component\HttpFoundation\JsonResponse($products);
});
$app->get('/product/{id}', function($id) {
    $products = json_decode(file_get_contents('products.json'), true);
    foreach ($products as $product) {
        if ($product['productId'] == $id) {
            return new \Symfony\Component\HttpFoundation\JsonResponse($product);
        }
    }
    return new \Symfony\Component\HttpFoundation\JsonResponse(['msg' => 'Record not found'], 404);
});
$app->run();