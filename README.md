# untitled-quiz-website

---

## Running the backend locally

In order to launch the backend (via command line)...

1. Have a local database running (PostgreSQL preferred, but MySQL may also work)
2. Set up a file under `backend/src/main/resources` called `application-local.properties`
3. Configure the backend to connect to your local database:
```properties
# Example:
spring.datasource.url = jdbc:postgresql://localhost:5432/postgres
spring.datasource.username = postgres
spring.datasource.password = mysecretpassword
```
4. Move to the `backend` directory and compile using Maven:
```shell
cd backend
mvn -B clean package --file pom.xml
```
5. Run using the configured profile:
```shell
java -jar target/backend-0.0.1-SNAPSHOT.jar --spring.profiles.active=local
```