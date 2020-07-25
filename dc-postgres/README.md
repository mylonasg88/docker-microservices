## Connect to DB
```bash
$ docker exec -it dc-postgres bash
```
Then inside the container run
```bash
$ psql --username=power_user --dbname=dc_microservices
```
You should see
```dc_microservices=# ```

Show tables: ```\d``` will display a list of tables.
