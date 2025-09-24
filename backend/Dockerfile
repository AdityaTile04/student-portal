FROM openjdk:22-jdk-slim
COPY target/backend-app.jar backend-app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "backend-app.jar"]