FROM java:8
VOLUME tmp
EXPOSE 8080
RUN git clone https://github.com/vishnubob/wait-for-it.git
ADD spring-boot-docker-compose-0.0.1.jar app.jar
ENTRYPOINT ["./wait-for-it/wait-for-it.sh", "docker-mysql:3306", "-t", "300", "-s", "--", "java","-jar", "app.jar"]