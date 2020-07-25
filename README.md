## Docker manual

Build an image

```bash
docker build -t prorva/dc-node
```

you can add `tag` in the end to specify version.

```bash
docker build -t prorva/dc-node:1.1
```

Publish latest changes of an image
build first then

```bash
docker push prorva/dc-node

```

## Docker usefull commands

### Rebuild containers

This is usefull after one of the dependencies of images have been changed

```bash
docker-compose up --force-recreate
```

SSH into docker bash

```bash
docker exec -it dc-node bash
```
