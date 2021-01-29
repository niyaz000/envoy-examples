## Run the container as

`docker run --rm -it -p 9901:9901 -p 8080:8080 -v $(pwd)/envoy.yaml:/envoy.yaml envoyproxy/envoy:v1.15.1 -c /envoy.yaml`

## Hit curl as below

`curl -X GET http://localhost:8080/users`

You should get response something like this

```
{"path":"/api/v1/users"}
```
