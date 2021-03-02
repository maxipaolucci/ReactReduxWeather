# build
docker build -t weather_app .

# run
docker run --name weather_app_container -p 4444:4444 --rm weather_app
